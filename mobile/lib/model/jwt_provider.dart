import 'package:flutter/cupertino.dart';
import 'package:mobile/controller/local_data_controller.dart';
import 'package:provider/provider.dart';
import 'package:file/local.dart';

class JWTProvider extends ChangeNotifier {
  String? _jwt;

  String? get jwt {
    if (_jwt != null) {
      return _jwt;
    }
    getToken();
    return null;
  }

  getToken() async {
    print("whaat");
    String? readedJWT = await LocalDataController.readJWT();
    if (readedJWT != null) {
      jwt = readedJWT;
    } else {
      await LocalDataController.saveJwt("jwt");
    }
  }

  set jwt(String? value) {
    _jwt = value;
  }
}
