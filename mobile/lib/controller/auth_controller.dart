import 'package:flutter/cupertino.dart';

class AuthController extends ChangeNotifier {
  static void navigateToNextPage(String nextPageId, BuildContext context) {
    Navigator.pushNamed(context, nextPageId);
    //todo pop old page
  }

  static Future<void> register(String email, String password) async {
    String jwt = "123";
    //todo send them as http post
    //todo save jwt here
    //todo use jwt with provider
    //todo show pop up according to response status
  }

  static Future<void> login(String email, String password) async {
    String jwt = "123";
    //todo send them as http post
    //todo save jwt here
    //todo use jwt with provider
    //todo show pop up according to response status
  }

  static Future<void> saveLocationData(String city, String district) async {
    String jwt = "123"; //get from provider
    //todo send location data
    //todo navigate if success
    //todo pop up if fail
  }

  static Future<void> saveNameAndPhoto() async {
    //todo send photo and name
    //todo navigate to feed page if success.
    //todo show pop up if fail.
  }
}
