import 'package:flutter/material.dart';
import 'package:mobile/view/auth_pages/pages/login_page.dart';
import 'package:mobile/view/auth_pages/pages/register_page.dart';
import 'view/auth_pages/pages/welcome_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.light().copyWith(
        primaryColor: const Color.fromARGB(253, 13, 152, 106),
        scaffoldBackgroundColor: const Color.fromARGB(253, 246, 246, 246),
      ),
      initialRoute: RegisterPage.id,
      routes: {
        WelcomePage.id: (context) => const WelcomePage(),
        LoginPage.id: (context) => const LoginPage(),
        RegisterPage.id: (context) => const RegisterPage(),
      },
    );
  }
}
