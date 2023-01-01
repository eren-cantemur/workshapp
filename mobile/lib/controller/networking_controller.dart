import 'dart:math';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import '../model/workshop_model.dart';
import '../view/auth/components/custom_dialogue.dart';
import 'local_data_controller.dart';

class NetworkController {
  static String mainURL = "http://workshappbackendlb-679277189.eu-central-1.elb.amazonaws.com";
  static String tempToken =
      "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwNzQsInJvbGUiOiJ3b3Jrc2hvcE1hbmFnZXIiLCJyb2xlSWQiOjQzNCwiaWF0IjoxNjcyNTczNzg4LCJleHAiOjE2NzM3ODMzODh9.xReZ7nLzuMb0H_0vwTo8MbeUyr0cWVY5uzTAaWYcjPmnrj8pY2kSZsElfljKbvVbcavFqXNQ-_VW7se9nuX16K5RdsFdgDNbsZ4gw5b69bdvtLl4QbpZqc2DYgKmgGsFhfeOZxh_I_eIHqnksacDrmRl4Nzm_oCALMLzqTOy0bXWqOC1f90DMeqDgME0b6jbEaMRE7cWuL2ZkcVxiQD5w37dD6_Owqgl6Nr1GASr3RZqloQyvktx-uzswXLGOGJNtdLvQBlEr-BYcagVMZXFwMu5D-K0-HdohK5pBmZhwn2dZUe-r4H45QCrbZyePS_zUxcI1BJBaVeIVM8Xd56sbEkU48nkmI86eOvq1eW01LiSAXnqn7jxfcr7iYHTnvuU5UxAmTfi5XjiT4eS0hvB7wy7Gm_KRu_8r84HnDWNEP3ZwbCsCCO5bN6MBO5NuaofQRNOzf2D86iCApdVHIPKp4PjxEAWizKbmFg2PTXSJTC4dcPQs5tx1nkuM9RRP1ivXnvwhl-DwyyBV18g4WWH794dJa2a_Q_wJ9lvURGA-tKVHRHpf0b_OjlmRNgLhrCRvu1Qts8b9C-yrjleetY4JvrCY7ycBK3XGKw3y_KV552nxi0csjsEAZWNGBeCArHU6vTVrMYnpyEumDyLYJ2h1DTndXmLbBu2E8hdqFW-R5k";

  static Future<String> login(String email, String password) async {
    Map data = {"email": email, "password": password};
    var body = jsonEncode(data);
    try {
      var response = await http.post(Uri.parse('$mainURL/login'),
          headers: <String, String>{
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: body);
      var decodedData = jsonDecode(response.body);
      if (response.statusCode == 200) {
        String? jwt = decodedData["result"];
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
    Map data = {"email": email, "password": password, "role": "customer"};
    var body = jsonEncode(data);
    try {
      var response = await http.post(Uri.parse('$mainURL/register'),
          headers: <String, String>{
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: body);
      var decodedData = jsonDecode(response.body);
      if (response.statusCode == 200) {
        String? jwt = decodedData["result"];
        if (jwt != null) {
          await LocalDataController.saveJwt(jwt);
          return "done";
        } else {
          return "Missing response data";
        }
      } else if (response.statusCode == 400) {
        return decodedData['message'];
      }
      return "error";
    } catch (e) {
      throw e.toString();
    }
  }

  static Future<List<Workshop>> getWorkshops(String jwt, BuildContext context) async {
    final response = await http.get(
      Uri.parse('$mainURL/workshop/approved'),
      headers: <String, String>{'Content-Type': 'application/json; charset=UTF-8', 'Authorization': tempToken},
    );

    if (response.statusCode == 200) {
      var decodedData = jsonDecode(response.body);
      final workshops = decodedData['result'];
      print(workshops);
    } else {
      showDialog<String>(
        context: context,
        builder: (BuildContext context) => const CustomDialog(
          title: "Unexpected Error.",
          text: "Error",
        ),
      );
      return [];
      //todo fix this for error handling
    }

    //todo parse response
    var intValue = Random().nextInt(10);
    return [
      Workshop(
          id: 2,
          name: "Kokteyl 101",
          city: "Istanbul",
          owner: "Kamare Workshops",
          photo: "https://iyikigormusum.com/uploads/d709353c272bf0af74aa2a30b7222a44.jpeg",
          description: "lorem upsum",
          capacity: 30,
          town: 'kadikoy',
          workshopManagerId: '1',
          workshopImages: [],
          reviews: [],
          category: 'muzik'),
      Workshop(
          id: 2,
          name: "Kısa Film Çekmek",
          city: "Istanbul",
          owner: "Kamare Workshops",
          photo: "https://cdn.wannart.com/production/post/2018/03/kısa-film-wannart.jpg",
          description: "lorem upsum",
          capacity: 30,
          town: 'kadikoy',
          workshopManagerId: '1',
          workshopImages: [],
          reviews: [],
          category: 'muzik'),
      Workshop(
          id: 2,
          name: "Kahve Atolyesi",
          city: "Istanbul",
          owner: "Kamare Workshops",
          photo: "https://cdn.yemek.com/mnresize/940/940/uploads/2018/08/kahve-sozlugu-editor.jpg",
          description: "lorem upsum",
          capacity: 30,
          town: 'kadikoy',
          workshopManagerId: '1',
          workshopImages: [],
          reviews: [],
          category: 'muzik'),
      Workshop(
          id: 2,
          name: "Kahve Atolyesi",
          city: "Istanbul",
          owner: "Kamare Workshops",
          photo: "https://cdn.yemek.com/mnresize/940/940/uploads/2018/08/kahve-sozlugu-editor.jpg",
          description: "lorem upsum",
          capacity: 30,
          town: 'kadikoy',
          workshopManagerId: '1',
          workshopImages: [],
          reviews: [],
          category: 'muzik'),
      Workshop(
          id: 2,
          name: "Kahve Atolyesi",
          city: "Istanbul",
          owner: "Kamare Workshops",
          photo: "https://cdn.yemek.com/mnresize/940/940/uploads/2018/08/kahve-sozlugu-editor.jpg",
          description: "lorem upsum",
          capacity: 30,
          town: 'kadikoy',
          workshopManagerId: '1',
          workshopImages: [],
          reviews: [],
          category: 'muzik'),
    ];
  }

  static Future<Workshop> getFeaturedWorkshop() async {
    return Workshop(
        id: 2,
        name: "Kokteyl",
        city: "Istanbul",
        owner: "Gibi Workshop House",
        photo: "https://iyikigormusum.com/uploads/d709353c272bf0af74aa2a30b7222a44.jpeg",
        description: "lorem upsum",
        capacity: 3,
        town: 'kadikoy',
        workshopManagerId: '1',
        workshopImages: [],
        reviews: [],
        category: 'muzik');
  }

  static Future<List<Workshop>> getReservations(String jwt, BuildContext context) async {
    final response = await http.get(
      Uri.parse('$mainURL/workshop/approved'),
      headers: <String, String>{'Content-Type': 'application/json; charset=UTF-8', 'Authorization': tempToken},
    );

    if (response.statusCode == 200) {
      var decodedData = jsonDecode(response.body);
      final workshops = decodedData['result'];
    } else {
      showDialog<String>(
        context: context,
        builder: (BuildContext context) => const CustomDialog(
          title: "Unexpected Error.",
          text: "Error",
        ),
      );
      return [];
      //todo fix this for error handling
    }
    var intValue = Random().nextInt(10);
    return [
      Workshop(
          id: 2,
          name: "Kokteyl 101",
          city: "Istanbul",
          owner: "Kamare Workshops",
          photo: "https://iyikigormusum.com/uploads/d709353c272bf0af74aa2a30b7222a44.jpeg",
          description: "lorem upsum",
          capacity: 30,
          town: 'kadikoy',
          workshopManagerId: '1',
          workshopImages: [],
          reviews: [],
          category: 'muzik'),
      Workshop(
          id: 2,
          name: "Kısa Film Çekmek",
          city: "Istanbul",
          owner: "Kamare Workshops",
          photo: "https://cdn.wannart.com/production/post/2018/03/kısa-film-wannart.jpg",
          description: "lorem upsum",
          capacity: 30,
          town: 'kadikoy',
          workshopManagerId: '1',
          workshopImages: [],
          reviews: [],
          category: 'muzik'),
      Workshop(
          id: 2,
          name: "Kahve Atolyesi",
          city: "Istanbul",
          owner: "Kamare Workshops",
          photo: "https://cdn.yemek.com/mnresize/940/940/uploads/2018/08/kahve-sozlugu-editor.jpg",
          description: "lorem upsum",
          capacity: 30,
          town: 'kadikoy',
          workshopManagerId: '1',
          workshopImages: [],
          reviews: [],
          category: 'muzik'),
      Workshop(
          id: 2,
          name: "Kahve Atolyesi",
          city: "Istanbul",
          owner: "Kamare Workshops",
          photo: "https://cdn.yemek.com/mnresize/940/940/uploads/2018/08/kahve-sozlugu-editor.jpg",
          description: "lorem upsum",
          capacity: 30,
          town: 'kadikoy',
          workshopManagerId: '1',
          workshopImages: [],
          reviews: [],
          category: 'muzik'),
      Workshop(
          id: 2,
          name: "Kahve Atolyesi",
          city: "Istanbul",
          owner: "Kamare Workshops",
          photo: "https://cdn.yemek.com/mnresize/940/940/uploads/2018/08/kahve-sozlugu-editor.jpg",
          description: "lorem upsum",
          capacity: 30,
          town: 'kadikoy',
          workshopManagerId: '1',
          workshopImages: [],
          reviews: [],
          category: 'muzik'),
    ];
  }
}
