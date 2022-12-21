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
  }

  @override
  void didChangeDependencies() {
    // TODO: implement didChangeDependencies
    super.didChangeDependencies();
    data = _controller.getWorkshops(context);
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Workshop>>(
      future: data,
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          return ListView.builder(
            physics: const NeverScrollableScrollPhysics(),
            shrinkWrap: true,
            itemCount: snapshot.data!.length,
            itemBuilder: (context, index) {
              return WorkshopCell(
                workshop: snapshot.data![index],
                index: index,
              );
            },
          );
        } else if (snapshot.hasError) {
          print(snapshot.error);
          return Text('${snapshot.error}');
        }
        return const CircularProgressIndicator();
      },
    );
  }
}
