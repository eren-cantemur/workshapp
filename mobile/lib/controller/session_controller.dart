import 'package:mobile/controller/app_bottom_controller.dart';
import 'package:mobile/controller/local_data_controller.dart';
import 'package:flutter/material.dart';
import 'package:mobile/view/auth/pages/welcome_page.dart';

class SessionController {
  static void controlSession(BuildContext context) async {
    await LocalDataController.readJWT().then((value) {
      if (value != null) {
        //GOOD
        Navigator.pushNamed(context, AppBottomController.id);
      } else {
        Navigator.pushNamed(context, WelcomePage.id);
      }
    });
  }
}
