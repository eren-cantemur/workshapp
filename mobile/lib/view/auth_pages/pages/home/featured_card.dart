import 'package:flutter/material.dart';
import 'package:mobile/controller/home_list_controller.dart';
import 'package:mobile/model/workshop_model.dart';

class FeaturedCard extends StatefulWidget {
  const FeaturedCard({Key? key}) : super(key: key);

  @override
  State<FeaturedCard> createState() => _FeaturedCardState();
}

class _FeaturedCardState extends State<FeaturedCard> {
  late Future<Workshop> featuredWorkshop;
  final HomeListController _controller = HomeListController();

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    featuredWorkshop = _controller.getFeaturedWorkshop();
  }

  @override
  Widget build(BuildContext context) {
    final height = MediaQuery.of(context).size.height;
    final width = MediaQuery.of(context).size.width;
    return Stack(
      children: [
        FutureBuilder<Workshop>(
          future: featuredWorkshop,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              return ShaderMask(
                shaderCallback: (rect) {
                  return LinearGradient(
                    begin: Alignment.bottomCenter,
                    end: Alignment.center,
                    colors: [Colors.black.withOpacity(1), Colors.transparent],
                  ).createShader(Rect.fromLTRB(0, 0, rect.width, rect.height));
                },
                blendMode: BlendMode.srcATop,
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(15),
                    child: Image(
                      width: width,
                      fit: BoxFit.cover,
                      image: NetworkImage(
                        snapshot.data!.imageURL,
                      ),
                    ),
                  ),
                ),
              );
            } else if (snapshot.hasError) {
              return Text('${snapshot.error}');
            }
            return const CircularProgressIndicator();
          },
        ),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              const Expanded(
                flex: 17,
                child: SizedBox(
                  width: 2,
                ),
              ),
              Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.fromLTRB(20, 0, 0, 20),
                    child: Text(
                      "Tum içecek workshoplarinda -%30!",
                      style: TextStyle(fontSize: height / 45, color: Colors.white, fontWeight: FontWeight.w600),
                    ),
                  ),
                ],
              ),
            ],
          ),
        )
      ],
    );
  }
}
