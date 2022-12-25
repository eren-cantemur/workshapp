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

  FeedDataProvider(BuildContext context) {
    _fetchData(context);
  }

  Future<void> _fetchData(BuildContext context) async {
    updateData(context);
  }

  void updateData(BuildContext context) async {
    _data = await getWorkshops(context);
    notifyListeners();
  }

  Future<List<Workshop>> getWorkshops(BuildContext context) {
    if (Provider.of<JWTProvider>(context, listen: false).jwt != null) {
      return NetworkController.getWorkshops(Provider.of<JWTProvider>(context, listen: false).jwt!)
          .then((value) => value);
    } else {
      return LocalDataController.readJWT().then((key) {
        if (key == null) {
          AuthController.logout(context);
          return [];
        }
        Provider.of<JWTProvider>(context, listen: false).getToken();
        return NetworkController.getWorkshops(key);
      });
    }
  }
}
