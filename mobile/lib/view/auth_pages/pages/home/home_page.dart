import 'package:flutter/material.dart';
import 'package:mobile/controller/home_list_controller.dart';
import 'package:mobile/controller/home_page_controller.dart';
import 'package:mobile/view/auth_pages/components/search_bar_widget.dart';
import 'package:mobile/view/auth_pages/pages/home/featured_card.dart';
import 'package:mobile/view/auth_pages/pages/home/home_list_view.dart';
import 'package:provider/provider.dart';
import '../../../../controller/feed_data_provider.dart';
import '../../../../model/workshop_model.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);
  static String id = "home_page";

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final TextEditingController _textEditingController = TextEditingController();

  @override
  void initState() {
    super.initState();
    // TODO: implement initState
  }

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [ChangeNotifierProvider(create: (_) => FeedDataProvider(context))],
      child: Scaffold(
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
          child: Column(children: [
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
                onChanged: (text) {},
                controller: _textEditingController,
              ),
            ),
            const SizedBox(
              height: 10,
            ),
            const HomeList(),
          ]),
        ),
      ),
    );
  }
}
