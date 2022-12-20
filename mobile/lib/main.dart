import 'package:flutter/material.dart';
import 'package:mobile/view/auth_pages/pages/auth/login_page.dart';
import 'package:mobile/view/auth_pages/pages/auth/profile_info_page.dart';
import 'package:mobile/view/auth_pages/pages/auth/profile_info_photo.dart';
import 'package:mobile/view/auth_pages/pages/auth/register_page.dart';
import 'package:mobile/view/auth_pages/pages/home_page.dart';
import 'package:provider/provider.dart';
import 'controller/auth_controller.dart';
import 'view/auth_pages/pages/auth/welcome_page.dart';

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
        Provider<AuthController>(create: (_) => AuthController()),
      ],
      child: MaterialApp(
        theme: ThemeData.light().copyWith(
          primaryColor: const Color.fromARGB(253, 13, 152, 106),
          scaffoldBackgroundColor: const Color.fromARGB(253, 246, 246, 246),
        ),
        initialRoute: ProfilePhotoNamePage.id,
        routes: {
          WelcomePage.id: (context) => const WelcomePage(),
          LoginPage.id: (context) => const LoginPage(),
          RegisterPage.id: (context) => const RegisterPage(),
          ProfileInfoPage.id: (context) => const ProfileInfoPage(),
          ProfilePhotoNamePage.id: (context) => const ProfilePhotoNamePage(),
          HomePage.id: (context) => const HomePage(),
        },
        home: const WelcomePage(),
      ),
    );
  }
}
