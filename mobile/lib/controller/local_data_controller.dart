import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class LocalDataController {
  static saveJwt(String jwt) async {
    const storage = FlutterSecureStorage();
    String withBear = "Bearer $jwt";
    await storage.write(key: "jwt", value: withBear);
  }

  static Future<String?> readJWT() async {
    const storage = FlutterSecureStorage();
    String? jwt = await storage.read(key: "jwt");
    return jwt;
  }

  static Future<void> deleteJWT() async {
    const storage = FlutterSecureStorage();
    await storage.delete(key: "jwt");
  }
}
