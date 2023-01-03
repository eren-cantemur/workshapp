import 'package:flutter/material.dart';
import 'package:mobile/controller/app_bottom_controller.dart';
import 'package:mobile/model/jwt_provider.dart';
import 'package:mobile/view/auth/pages/login_page.dart';
import 'package:mobile/view/auth/pages/profile_info_page.dart';
import 'package:mobile/view/auth/pages/profile_info_photo.dart';
import 'package:mobile/view/auth/pages/register_page.dart';
import 'package:mobile/view/home/pages/home_page.dart';
import 'package:provider/provider.dart';
import 'view/auth/pages/welcome_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ListenableProvider(create: (context) => JWTProvider()),
      ],
      child: MaterialApp(
        theme: ThemeData.light().copyWith(
          primaryColor: const Color.fromARGB(253, 13, 152, 106),
          scaffoldBackgroundColor: const Color.fromARGB(253, 246, 246, 246),
        ),
        initialRoute: AppBottomController.id,
        routes: {
          WelcomePage.id: (context) => const WelcomePage(),
          LoginPage.id: (context) => const LoginPage(),
          RegisterPage.id: (context) => const RegisterPage(),
          ProfileInfoPage.id: (context) => const ProfileInfoPage(),
          ProfilePhotoNamePage.id: (context) => const ProfilePhotoNamePage(),
          HomePage.id: (context) => const HomePage(),
          AppBottomController.id: (context) => const AppBottomController(),
        },
        home: const WelcomePage(),
      ),
    );
  }
}
