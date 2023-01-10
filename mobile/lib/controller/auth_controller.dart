import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:image_picker/image_picker.dart';
import 'package:mobile/controller/app_bottom_controller.dart';
import 'package:mobile/controller/networking_controller.dart';
import 'package:mobile/view/auth/components/custom_dialogue.dart';
import 'package:mobile/view/auth/pages/profile_info_photo.dart';
import 'package:mobile/view/auth/pages/welcome_page.dart';
import 'package:mobile/view/home/pages/home_page.dart';
import 'dart:convert';
import 'local_data_controller.dart';
import 'dart:io';

class AuthController extends ChangeNotifier {
  register(String email, String password, context) async {
    try {
      final response = await NetworkController.register(email, password);
      if (response == "done") {
        Navigator.pushNamed(context, ProfilePhotoNamePage.id);
      } else {
        showDialog<String>(
          context: context,
          builder: (BuildContext context) => CustomDialog(
            title: "Error",
            text: response,
          ),
        );
      }
    } catch (e) {
      showDialog<String>(
        context: context,
        builder: (BuildContext context) => CustomDialog(
          title: "Unexpected Error.",
          text: e.toString(),
        ),
      );
    }
  }

  login(String email, String password, context) async {
    try {
      final response = await NetworkController.login(email, password);
      if (response == "done") {
        navigateToNextPage(AppBottomController.id, context);
      } else {
        showDialog<String>(
          context: context,
          builder: (BuildContext context) => CustomDialog(
            title: "Error",
            text: response,
          ),
        );
      }
    } catch (e) {
      showDialog<String>(
        context: context,
        builder: (BuildContext context) => CustomDialog(
          title: "Unexpected Error.",
          text: e.toString(),
        ),
      );
    }
  }

  //ProfilePhotoName page
  Future<File?> getImage() async {
    final picker = ImagePicker();
    final pickedFile =
        await picker.pickImage(source: ImageSource.gallery, maxHeight: 1500, maxWidth: 1500, imageQuality: 50);
    if (pickedFile != null) {
      return File(pickedFile.path);
    }
    return null;
  }

  static Future<bool> logout(context) async {
    Navigator.of(context).pushNamedAndRemoveUntil(WelcomePage.id, (Route<dynamic> route) => false);
    return true;
  }

  static void navigateToNextPage(String nextPageId, BuildContext context) {
    Navigator.pushNamed(context, nextPageId);
  }

  Future<void> saveNameAndPhoto(String name, File? photo, context) async {
    String? jwt = await LocalDataController.readJWT();
    final response = await NetworkController.upload(name, photo!, jwt!);
    Navigator.of(context).pushNamedAndRemoveUntil(AppBottomController.id, (Route<dynamic> route) => false);
  }
}
