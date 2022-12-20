import 'package:flutter/material.dart';
import 'package:mobile/view/auth_pages/pages/home/home_list_view.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);
  static String id = "home_page";

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Column(
      children: [
        Expanded(
            child: Container(
          color: Colors.red,
        )),
        const Expanded(child: HomeList()),
      ],
    ));
  }
}

// import 'package:flutter/material.dart';
//
// class MyListView extends StatelessWidget {
//   final Future<List<MyObject>> data;
//
//   MyListView({@required this.data});
//
//   @override
//   Widget build(BuildContext context) {
//     return FutureBuilder<List<MyObject>>(
//       future: data,
//       builder: (context, snapshot) {
//         if (snapshot.hasData) {
//           return ListView.builder(
//             itemCount: snapshot.data.length,
//             itemBuilder: (context, index) {
//               return MyListItem(myObject: snapshot.data[index]);
//             },
//           );
//         } else if (snapshot.hasError) {
//           return Text('${snapshot.error}');
//         }
//         return CircularProgressIndicator();
//       },
//     );
//   }
// }
//
// class MyListItem extends StatelessWidget {
//   final MyObject myObject;
//
//   MyListItem({@required this.myObject});
//
//   @override
//   Widget build(BuildContext context) {
//     return Text(myObject.name);
//   }
// }
//
// class MyObject {
//   final String name;
//
//   MyObject(this.name);
// }
