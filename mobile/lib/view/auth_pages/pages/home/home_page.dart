import 'package:flutter/material.dart';
import 'package:mobile/view/auth_pages/components/search_bar_widget.dart';
import 'package:mobile/view/auth_pages/pages/home/featured_card.dart';
import 'package:mobile/view/auth_pages/pages/home/home_list_view.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);
  static String id = "home_page";

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  TextEditingController _controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "WorkshApp",
          style: TextStyle(
            color: Color.fromRGBO(0, 33, 64, 1),
          ),
        ),
        backgroundColor: Theme.of(context).scaffoldBackgroundColor,
        shadowColor: Colors.transparent,
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Container(
              height: MediaQuery.of(context).size.height * 0.3,
              color: Colors.transparent,
              child: const FeaturedCard(),
            ),
            const SizedBox(
              height: 10,
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(15, 10, 10, 10),
              child: SearchBar(
                onChanged: (text) {
                  print(text);
                },
                onSubmitted: () {
                  print("submit text");
                },
                controller: _controller,
              ),
            ),
            const SizedBox(
              height: 10,
            ),
            const HomeList(),
          ],
        ),
      ),
    );
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
