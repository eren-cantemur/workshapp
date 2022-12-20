import 'package:flutter/cupertino.dart';
import 'package:mobile/controller/networking_controller.dart';

import '../model/workshop_model.dart';

class HomeListController {
  Future<List<Workshop>> getWorkshops() async {
    return await NetworkController.getWorkshops();
  }
}
