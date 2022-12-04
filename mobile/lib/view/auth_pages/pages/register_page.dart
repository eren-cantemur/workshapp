import 'package:flutter/material.dart';
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
                  ),
                ),
                const Expanded(
                  flex: 7,
                  child: SizedBox(
                    height: 20,
                  ),
                ),
                const AuthButton(
                  title: "Register",
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
                          print('Text Clicked');
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
