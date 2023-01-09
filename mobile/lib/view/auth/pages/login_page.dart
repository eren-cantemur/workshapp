import 'package:flutter/material.dart';
import 'package:mobile/controller/auth_controller.dart';
import 'package:mobile/view/auth/pages/register_page.dart';
import '../components/auth_input_field.dart';
import '../components/action_button.dart';
import 'package:mobile/model/paths.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);
  static String id = 'login';

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
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
                  child: Center(child: Image.asset(Paths.logoPath)),
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
                    title: "Login",
                    nextPageId: "empty",
                    function: () {
                      authController.login(
                          _mailTextFieldController.value.text, _passwordTextFieldController.value.text, context);
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
                        "Do not have an account? ",
                        style: TextStyle(color: Color.fromARGB(253, 99, 109, 119), fontSize: 18),
                      ),
                      InkWell(
                        onTap: () {
                          AuthController.navigateToNextPage(RegisterPage.id, context);
                        },
                        child: Text(
                          'Register',
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
