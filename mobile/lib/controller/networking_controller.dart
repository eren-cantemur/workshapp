import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'local_data_controller.dart';

class NetworkController {
  static String mainURL = "https://king-prawn-app-ffmuq.ondigitalocean.app";
  // static String mainURL = "https://king-prawn-app-ffmuq.ondigitalocean.app";
  static Future<String> login(String email, String password) async {
    Map data = {"mail": email, "password": password};
    var body = jsonEncode(data);
    try {
      var response = await http.post(Uri.parse('$mainURL/login'),
          headers: <String, String>{
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: body);
      var decodedData = jsonDecode(response.body);
      if (response.statusCode == 200) {
        String? jwt = decodedData["jwt"];
        if (jwt != null) {
          await LocalDataController.saveJwt(jwt);
          return "done";
        }
      } else if (response.statusCode == 400) {
        return decodedData['message'];
      }
      return "error";
    } catch (e) {
      throw e.toString();
    }
  }

  static Future<String> register(String email, String password) async {
    Map data = {"mail": email, "password": password};
    var body = jsonEncode(data);
    try {
      var response = await http.post(Uri.parse('$mainURL/register'),
          headers: <String, String>{
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: body);
      var decodedData = jsonDecode(response.body);
      if (response.statusCode == 200) {
        String? jwt = decodedData["jwt"];
        if (jwt != null) {
          await LocalDataController.saveJwt(jwt);
          return "done";
        }
      } else if (response.statusCode == 400) {
        return decodedData['message'];
      }
      return "error";
    } catch (e) {
      throw e.toString();
    }
  }
}
