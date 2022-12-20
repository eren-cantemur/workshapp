import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:image_picker/image_picker.dart';
import 'package:mobile/controller/networking_controller.dart';
import 'package:mobile/view/auth_pages/components/custom_dialogue.dart';
import 'package:mobile/view/auth_pages/pages/home/home_page.dart';
import 'dart:convert';
import 'local_data_controller.dart';
import 'dart:io';

class AuthController extends ChangeNotifier {
  register(String email, String password, context) async {
    try {
      final response = await NetworkController.register(email, password);
      if (response == "done") {
        Navigator.pushNamed(context, HomePage.id);
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
        navigateToNextPage(HomePage.id, context);
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

  static void navigateToNextPage(String nextPageId, BuildContext context) {
    Navigator.pushNamed(context, nextPageId);
    //todo pop old page
  }

  Future<void> saveNameAndPhoto(String name, File? photo, context) async {
    Navigator.of(context).pushNamedAndRemoveUntil(HomePage.id, (Route<dynamic> route) => false);
    //todo send photo and name
    //todo navigate to feed page if success.
    //todo show pop up if fail.
  }

  // static Future<void> saveLocationData(String city, String district) async {
  //   String jwt = "123"; //get from provider
  //   //todo send location data
  //   //todo navigate if success
  //   //todo pop up if fail
  // }
}
