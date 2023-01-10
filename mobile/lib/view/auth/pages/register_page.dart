import 'package:flutter/material.dart';
import 'package:mobile/controller/auth_controller.dart';
import 'package:mobile/view/auth/pages/login_page.dart';
import '../components/action_button.dart';
import '../components/auth_input_field.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({Key? key}) : super(key: key);
  static String id = "register";
  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final TextEditingController _mailTextFieldController = TextEditingController();
  final TextEditingController _passwordTextFieldController = TextEditingController();
  AuthController authController = AuthController();
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
                  child: Center(child: Image.asset("assets/logo.png")),
                ),
                const Expanded(
                  flex: 7,
                  child: SizedBox(
                    width: 1,
                  ),
                ),
                Expanded(
                  flex: 12,
                  child: AuthInputField(
                    controller: _mailTextFieldController,
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
                Expanded(
                  flex: 12,
                  child: AuthInputField(
                    name: "Password",
                    hint: "********",
                    obscure: true,
                    controller: _passwordTextFieldController,
                  ),
                ),
                const Expanded(
                  flex: 7,
                  child: SizedBox(
                    height: 20,
                  ),
                ),
                Expanded(
                  flex: 7,
                  child: AuthButton(
                    title: "Register",
                    nextPageId: "notyet",
                    function: () {
                      final bool emailValid =
                          RegExp(r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
                              .hasMatch(_mailTextFieldController.value.text);
                      if (emailValid) {
                      } else {
                        authController.register(
                            _mailTextFieldController.value.text, _mailTextFieldController.value.text, context);
                      }
                    },
                  ),
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
