import 'package:flutter/cupertino.dart';
import 'package:mobile/model/workshop_model.dart';
import 'package:flutter/foundation.dart';
import 'package:provider/provider.dart';
import 'feed_data_provider.dart';

class FeedAccessLayerProvider with ChangeNotifier {
  List<Workshop> _data = [];
  List<Workshop> get data => _data;

  FeedAccessLayerProvider(BuildContext context) {
    _fetchData(context);
  }

  void _fetchData(BuildContext context) async {
    _data = await Provider.of<FeedDataProvider>(context, listen: false).getWorkshops(context);
    notifyListeners();
  }

  void filterData(String text, BuildContext context) async {
    final data = Provider.of<FeedDataProvider>(context, listen: false).data;
    _data = getFilteredWorkshops(data, text);
    notifyListeners();
  }

  List<Workshop> getFilteredWorkshops(List<Workshop> data, String name) {
    return data.where((workshop) => workshop.name.contains(name)).toList();
  }
}
