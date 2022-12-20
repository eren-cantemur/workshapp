import 'package:flutter/cupertino.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import '../model/workshop_model.dart';
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

  static Future<List<Workshop>> getWorkshops() async {
    return [
      Workshop(
          name: "Kokteyl 101",
          location: "Istanbul",
          price: "450",
          owner: "Kamare Workshops",
          imageURL: "https://iyikigormusum.com/uploads/d709353c272bf0af74aa2a30b7222a44.jpeg"),
      Workshop(
          name: "Kısa Film Çekmek",
          location: "Istanbul",
          price: "300",
          owner: "Kamare Workshops",
          imageURL: "https://cdn.wannart.com/production/post/2018/03/kısa-film-wannart.jpg"),
      Workshop(
          name: "Kahve Atolyesi",
          location: "Istanbul",
          price: "200",
          owner: "Kamare Workshops",
          imageURL: "https://cdn.yemek.com/mnresize/940/940/uploads/2018/08/kahve-sozlugu-editor.jpg"),
    ];
  }

  static Future<Workshop> getFeaturedWorkshop() async {
    return Workshop(
        name: "Kokteyl",
        location: "Istanbul",
        price: "500",
        owner: "Gibi Workshop House",
        imageURL: "https://iyikigormusum.com/uploads/d709353c272bf0af74aa2a30b7222a44.jpeg");
  }
}
