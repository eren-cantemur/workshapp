import 'dart:math';
import 'dart:io';
import 'package:path/path.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:mobile/controller/auth_controller.dart';
import 'package:provider/provider.dart';
import 'dart:convert';
import 'providers/jwt_provider.dart';
import '../model/review.dart';
import '../model/workshop_model.dart';
import '../view/auth/components/custom_dialogue.dart';
import 'local_data_controller.dart';

class NetworkController {
  static String mainURL = "http://54.93.227.240:8080";

  static Future<String> login(String email, String password) async {
    Map data = {"email": email, "password": password, "role": "customer"};
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
    List<Workshop> workshopsToServe = [];
    final response = await http.get(
      Uri.parse('$mainURL/workshop/approved'),
      headers: <String, String>{'Content-Type': 'application/json; charset=UTF-8', 'Authorization': jwt},
    );
    if (response.statusCode == 200) {
      workshopsToServe = parseWorkshops(response.body);
    } else {
      print(response.statusCode);
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
    return workshopsToServe;
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
        workshopManagerId: 1,
        workshopImages: [],
        reviews: [],
        category: 'muzik');
  }

  static Future<List<Workshop>> getReservations(String jwt, BuildContext context) async {
    List<Workshop> workshopsToServe = [];
    final response = await http.get(
      Uri.parse('$mainURL/reservation/getByToken'),
      headers: <String, String>{'Content-Type': 'application/json; charset=UTF-8', 'Authorization': jwt},
    );

    if (response.statusCode == 200) {
      print(response.body);
      workshopsToServe = parseWorkshops(response.body);
      print(workshopsToServe);
    } else {
      showDialog<String>(
        context: context,
        builder: (BuildContext context) => const CustomDialog(
          title: "Unexpected Error.",
          text: "Error",
        ),
      );
      return [];
    }
    return workshopsToServe;
  }

  static List<Workshop> parseWorkshops(String responseBody) {
    print(responseBody);
    final decodedData = jsonDecode(responseBody);
    final workshops = decodedData['result'];
    print(workshops);
    List<Workshop> workshopList = [];
    for (var workshop in workshops) {
      workshopList.add(Workshop.fromJson(workshop));
    }
    return workshopList;
  }

  static Future<List<Review>> getReviews(String workshopId, BuildContext context) async {
    String? jwt = Provider.of<JWTProvider>(context, listen: false).jwt;
    List<Review> reviews = [];
    if (jwt == null) {
      return LocalDataController.readJWT().then((key) async {
        if (key == null) {
          AuthController.logout(context);
          return [];
        } else {
          jwt = key;
          return http.get(Uri.parse('$mainURL/review/workshopId/$workshopId'), headers: <String, String>{
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': key
          }).then((response) {
            reviews = (json.decode(response.body)['result'] as List).map((review) => Review.fromJson(review)).toList();
            return reviews;
          });
        }
      });
    } else {
      return http.get(Uri.parse('$mainURL/review/workshopId/$workshopId'), headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': jwt
      }).then((response) {
        reviews = (json.decode(response.body)['result'] as List).map((review) => Review.fromJson(review)).toList();
        return reviews;
      });
    }
  }

  static void sendReview(String comment, int rate, int workshopId, BuildContext context) async {
    return LocalDataController.readJWT().then((value) async {
      if (value == null) {
        AuthController.logout(context);
      } else {
        Map data = {"comment": comment, "rate": rate, "workshopId": workshopId};
        var body = jsonEncode(data);
        try {
          var response = await http.post(Uri.parse('$mainURL/review'),
              headers: <String, String>{'Content-Type': 'application/json; charset=UTF-8', 'Authorization': value},
              body: body);
          var decodedData = jsonDecode(response.body);
          if (response.statusCode == 200) {
            showDialog<String>(
              context: context,
              builder: (BuildContext context) => const CustomDialog(
                title: "Success",
                text: "We got your review, thanks!",
              ),
            );
          } else {
            showDialog<String>(
              context: context,
              builder: (BuildContext context) => CustomDialog(
                title: "Error",
                text: decodedData['message'] ?? "error",
              ),
            );
          }
        } catch (e) {
          throw e.toString();
        }
      }
    });
  }

  static Future<List<String>> getProfileData(BuildContext context) async {
    String? jwt = Provider.of<JWTProvider>(context, listen: false).jwt;
    List<String> data = [];
    if (jwt == null) {
      return LocalDataController.readJWT().then((key) async {
        if (key == null) {
          AuthController.logout(context);
          return [];
        } else {
          jwt = key;
          return http.get(Uri.parse('$mainURL/customer/id'), headers: <String, String>{
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': key
          }).then((response) {
            print(response.body);
            data = [json.decode(response.body)['result']['name'], json.decode(response.body)['result']['photo']];
            return data;
          });
        }
      });
    } else {
      return http.get(Uri.parse('$mainURL/customer/id'), headers: <String, String>{
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': jwt
      }).then((response) {
        print(response.body);
        data = [json.decode(response.body)['result']['name'], json.decode(response.body)['result']['photo']];
        return data;
      });
    }
  }

  static Future<http.StreamedResponse> upload(String name, File imageFile, String token) async {
    // open a bytestream
    // get file length
    var length = await imageFile.length();

    // string to uri
    var uri = Uri.parse("$mainURL/customer");

    // create multipart request
    var request = http.MultipartRequest("PUT", uri)
      ..fields["name"] = name
      ..fields["photo"] = "photo";

    // multipart that takes file
    var multipartFile = http.MultipartFile('image', imageFile.readAsBytes().asStream(), imageFile.lengthSync(),
        filename: basename(imageFile.path)); //try image instead of file

    // add file to multipart

    request.files.add(multipartFile);

    request.headers['Authorization'] = token;

    // send
    var response = await request.send();

    // listen for response
    response.stream.transform(utf8.decoder).listen((value) {
      print(value);
    });
    return response;
  }

  static Future<String> sendReservationRequest(BuildContext context, int id) async {
    String? jwt = Provider.of<JWTProvider>(context, listen: false).jwt;
    List<String> data = [];
    if (jwt == null) {
      return LocalDataController.readJWT().then((key) async {
        if (key == null) {
          AuthController.logout(context);
          return "x";
        } else {
          jwt = key;
          Map data = {"date": "12-12-2024", "workshopId": id};
          final body = jsonEncode(data);
          return http
              .post(Uri.parse('$mainURL/reservation'),
                  headers: <String, String>{
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Authorization': key,
                  },
                  body: body)
              .then(
            (response) {
              print(json.decode(response.body));
              if (json.decode(response.body)["type"] == "Success") {
                return "y";
              } else {
                return "x";
              }
            },
          );
        }
      });
    } else {
      Map data = {"date": "12-12-2024", "workshopId": id};
      final body = jsonEncode(data);
      return http
          .post(Uri.parse('$mainURL/reservation'),
              headers: <String, String>{
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': jwt,
              },
              body: body)
          .then(
        (response) {
          print(json.decode(response.body));
          if (json.decode(response.body)["type"] == "Success") {
            return "y";
          } else {
            return "x";
          }
        },
      );
    }
  }
}
