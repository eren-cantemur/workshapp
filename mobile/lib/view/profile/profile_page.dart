import 'package:flutter/material.dart';
import 'package:mobile/controller/auth_controller.dart';
import 'package:mobile/controller/local_data_controller.dart';
import 'package:mobile/controller/networking_controller.dart';
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
    profileData = NetworkController.getProfileData(context);
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
                      padding: EdgeInsets.all(10.0),
                      child: Container(
                        width: 150.0,
                        height: 150.0,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          image: DecorationImage(
                            fit: BoxFit.fill,
                            image: snapshot.data![1] == ""
                                ? const AssetImage("assets/logo.png") as ImageProvider
                                : NetworkImage(
                                    snapshot.data![1],
                                  ),
                          ),
                        ),
                      ),
                    ),
                    Text(
                      snapshot.data![0],
                      style: const TextStyle(
                        fontSize: 24.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    const Divider(
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
                    const ReservationList(),
                    Row(
                      children: [
                        InkWell(
                          onTap: () {
                            LocalDataController.deleteJWT();
                            AuthController.logout(context);
                          },
                          child: const Padding(
                            padding: EdgeInsets.all(15.0),
                            child: Text(
                              "Logout",
                              style: TextStyle(color: Colors.red, fontSize: 20),
                            ),
                          ),
                        ),
                      ],
                    )
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
