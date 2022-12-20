import 'package:flutter/material.dart';
import 'package:mobile/controller/home_list_controller.dart';
import 'package:mobile/model/workshop_model.dart';
import 'package:mobile/view/auth_pages/pages/home/workshop_cell.dart';

class HomeList extends StatefulWidget {
  const HomeList({Key? key}) : super(key: key);

  @override
  State<HomeList> createState() => _HomeListState();
}

class _HomeListState extends State<HomeList> {
  late final Future<List<Workshop>> data;
  final HomeListController _controller = HomeListController();

  @override
  void initState() {
    super.initState();
    data = _controller.getWorkshops();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Workshop>>(
      future: data,
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          return ListView.builder(
            itemCount: snapshot.data!.length,
            itemBuilder: (context, index) {
              return WorkshopCell(
                workshop: snapshot.data![index],
              );
            },
          );
        } else if (snapshot.hasError) {
          return Text('${snapshot.error}');
        }
        return const CircularProgressIndicator();
      },
    );
  }
}
