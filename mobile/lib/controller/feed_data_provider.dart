import 'package:flutter/cupertino.dart';
import 'package:mobile/model/workshop_model.dart';
import 'package:flutter/foundation.dart';
import 'package:provider/provider.dart';

import '../model/jwt_provider.dart';
import 'auth_controller.dart';
import 'local_data_controller.dart';
import 'networking_controller.dart';

class FeedDataProvider with ChangeNotifier {
  List<Workshop> _data = [];
  List<Workshop> get data => _data;

  FeedDataProvider(context) {
    _fetchData(context);
  }

  Future<void> _fetchData(context) async {
    updateData(context);
  }

  void updateData(context) async {
    _data = await getWorkshops(context);
    notifyListeners();
  }

  Future<List<Workshop>> getWorkshops(context) async {
    if (Provider.of<JWTProvider>(context, listen: false).jwt != null) {
      final workshops = await NetworkController.getWorkshops(Provider.of<JWTProvider>(context, listen: false).jwt!);
      return workshops;
    } else {
      String? readedJWT = await LocalDataController.readJWT();
      if (readedJWT == null) {
        await AuthController.logout(context);
        return [];
      }
      Provider.of<JWTProvider>(context, listen: false).getToken();
      final workshops = await NetworkController.getWorkshops(readedJWT);
      return workshops;
    }
  }
}
