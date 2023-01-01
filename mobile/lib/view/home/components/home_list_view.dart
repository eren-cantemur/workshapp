import 'package:flutter/material.dart';
import 'package:mobile/controller/feed_access_layer_provider.dart';
import 'package:mobile/controller/feed_data_provider.dart';
import 'package:mobile/controller/home_list_controller.dart';
import 'package:mobile/model/workshop_model.dart';
import 'package:mobile/view/home/components/workshop_cell.dart';
import 'package:provider/provider.dart';

class HomeList extends StatefulWidget {
  const HomeList({Key? key}) : super(key: key);
  @override
  State<HomeList> createState() => _HomeListState();
}

class _HomeListState extends State<HomeList> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<FeedAccessLayerProvider>(builder: (context, dataProvider, child) {
      return ListView.builder(
        physics: const NeverScrollableScrollPhysics(),
        shrinkWrap: true,
        itemCount: dataProvider.data.length,
        itemBuilder: (context, index) {
          return WorkshopCell(
            workshop: dataProvider.data[index],
            index: index,
          );
        },
      );
    });
  }
}
