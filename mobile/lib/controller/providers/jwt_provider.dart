import 'package:flutter/cupertino.dart';
import 'package:mobile/controller/auth_controller.dart';
import 'package:mobile/controller/local_data_controller.dart';

class JWTProvider extends ChangeNotifier {
  String? _jwt;

  String? get jwt {
    if (_jwt != null) {
      return _jwt;
    }
    getToken();
    return null;
  }

  set jwt(String? value) {
    _jwt = value;
  }

  getToken() async {
    String? readedJWT = await LocalDataController.readJWT();
    if (readedJWT != null) {
      jwt = readedJWT;
    } else {
      //todo logout instead of save again

      await LocalDataController.saveJwt("jwt");
    }
  }
}
