import 'package:flutter/cupertino.dart';
import 'package:mobile/controller/auth_controller.dart';
import 'package:mobile/controller/local_data_controller.dart';
import 'package:mobile/controller/networking_controller.dart';
import 'package:mobile/controller/providers/jwt_provider.dart';
import 'package:provider/provider.dart';

import '../model/workshop_model.dart';

class HomeListController {
  Future<List<Workshop>> getWorkshops(context) async {
    if (Provider.of<JWTProvider>(context, listen: false).jwt != null) {
      final workshops =
          await NetworkController.getWorkshops(Provider.of<JWTProvider>(context, listen: false).jwt!, context);
      return workshops;
    } else {
      String? readedJWT = await LocalDataController.readJWT();
      if (readedJWT == null) {
        await AuthController.logout(context);
        return [];
      }
      Provider.of<JWTProvider>(context, listen: false).getToken();
      final workshops = await NetworkController.getWorkshops(readedJWT, context);
      return workshops;
    }
  }

  Future<Workshop> getFeaturedWorkshop() async {
    return await NetworkController.getFeaturedWorkshop();
  }
}
