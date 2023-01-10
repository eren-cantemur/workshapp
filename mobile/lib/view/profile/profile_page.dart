import 'package:flutter/material.dart';
import 'package:mobile/controller/providers/reservations_data_provider.dart';
import 'package:mobile/view/profile/reservations_list.dart';
import 'package:provider/provider.dart';

class Profile extends StatefulWidget {
  const Profile({Key? key}) : super(key: key);

  @override
  State<Profile> createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  late Future<List<String>> profileData;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    profileData = [];
  }

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [ChangeNotifierProvider(create: (_) => ReservationsDataProvider(context))],
      child: FutureBuilder<List<String>>(
          future: profileData,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              return Scaffold(
                appBar: AppBar(
                  title: const Text(
                    "Profile",
                    style: TextStyle(
                      color: Color.fromRGBO(0, 33, 64, 1),
                    ),
                  ),
                  backgroundColor: Theme.of(context).scaffoldBackgroundColor,
                  shadowColor: Colors.transparent,
                ),
                body: SingleChildScrollView(
                  child: Column(children: [
                    Padding(
                      padding: const EdgeInsets.all(10.0),
                      child: Container(
                        width: 150.0,
                        height: 150.0,
                        decoration: const BoxDecoration(
                          shape: BoxShape.circle,
                          image: DecorationImage(
                            fit: BoxFit.fill,
                            image: NetworkImage(
                              'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/220px-Robert_Downey%2C_Jr._2012.jpg',
                            ),
                          ),
                        ),
                      ),
                    ),
                    const Text(
                      'Tony Stark',
                      style: TextStyle(
                        fontSize: 24.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    Divider(
                      thickness: 1,
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    Row(
                      children: const [
                        Padding(
                          padding: EdgeInsets.all(15.0),
                          child: Text(
                            'Reservations',
                            style: TextStyle(
                              fontSize: 24.0,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                      ],
                    ),
                    ReservationList(),
                  ]),
                ),
              );
            } else if (snapshot.hasError) {
              return Text('${snapshot.error}');
            }
            return const CircularProgressIndicator();
          }),
    );
  }
}
