import 'package:flutter/material.dart';
import 'package:mobile/controller/auth_controller.dart';
import 'package:mobile/view/auth_pages/pages/login_page.dart';
import '../components/action_button.dart';
import '../components/auth_input_field.dart';
import 'package:mobile/model/paths.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({Key? key}) : super(key: key);
  static String id = "register";
  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox(
        height: MediaQuery.of(context).size.height,
        child: SingleChildScrollView(
          child: SizedBox(
            height: MediaQuery.of(context).size.height,
            child: Column(
              children: [
                const Expanded(
                  flex: 15,
                  child: SizedBox(
                    width: 1,
                  ),
                ),
                Expanded(
                  flex: 37,
                  child: Center(child: Image.asset(Paths.logoPath)),
                ),
                const Expanded(
                  flex: 7,
                  child: SizedBox(
                    width: 1,
                  ),
                ),
                const Expanded(
                  flex: 12,
                  child: AuthInputField(
                    name: 'Email Adress',
                    hint: 'name@example.com',
                    obscure: false,
                  ),
                ),
                const Expanded(
                  flex: 3,
                  child: SizedBox(
                    height: 10,
                  ),
                ),
                const Expanded(
                  flex: 12,
                  child: AuthInputField(
                    name: "Password",
                    hint: "********",
                    obscure: true,
                  ),
                ),
                const Expanded(
                  flex: 7,
                  child: SizedBox(
                    height: 20,
                  ),
                ),
                AuthButton(
                  title: "Register",
                  nextPageId: "notyet",
                ),
                const Expanded(
                  flex: 2,
                  child: SizedBox(
                    height: 20,
                  ),
                ),
                Expanded(
                  flex: 7,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Text(
                        "Do you have an account? ",
                        style: TextStyle(color: Color.fromARGB(253, 99, 109, 119), fontSize: 18),
                      ),
                      InkWell(
                        onTap: () {
                          AuthController.navigateToNextPage(LoginPage.id, context);
                        },
                        child: Text(
                          'Login',
                          style: TextStyle(color: Theme.of(context).primaryColor, fontSize: 18),
                        ),
                      ),
                    ],
                  ),
                ),
                const Expanded(
                  flex: 9,
                  child: SizedBox(
                    height: 10,
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
