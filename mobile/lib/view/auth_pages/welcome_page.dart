import 'package:flutter/material.dart';
import 'components/action_button.dart';

class WelcomePage extends StatefulWidget {
  const WelcomePage({Key? key}) : super(key: key);
  static String id = "welcome";

  @override
  State<WelcomePage> createState() => _WelcomePageState();
}

class _WelcomePageState extends State<WelcomePage> {
  @override
  Widget build(BuildContext context) {
    const logoPath = 'assets/logo.png';
    const appName = "WorkshApp";
    return Scaffold(
      backgroundColor: const Color.fromARGB(253, 244, 245, 249),
      body: Column(
        children: [
          const Expanded(
            flex: 18,
            child: SizedBox(
              height: 200,
            ),
          ),
          Expanded(
            flex: 38,
            child: Center(child: Image.asset(logoPath)),
          ),
          const Expanded(
            flex: 10,
            child: SizedBox(
              height: 10,
            ),
          ),
          Expanded(
            flex: 12,
            child: Column(
              children: const [
                Center(
                  child: Text(
                    appName,
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.w600,
                      color: Color.fromRGBO(0, 33, 64, 1),
                    ),
                  ),
                ),
                SizedBox(
                  height: 10,
                ),
                Center(
                  child: Padding(
                    padding: EdgeInsets.fromLTRB(70, 0, 70, 0),
                    child: Text(
                      "Let's find a workshop which is best fit for you",
                      style: TextStyle(color: Color.fromRGBO(99, 109, 119, 1), fontSize: 18),
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
              ],
            ),
          ),
          const Expanded(
            flex: 12,
            child: SizedBox(
              height: 10,
            ),
          ),
          AuthButton(),
          const Expanded(
            flex: 2,
            child: SizedBox(
              height: 20,
            ),
          ),
          Expanded(
            flex: 7,
            child: InkWell(
              onTap: () {
                print('Text Clicked');
              },
              child: const Text(
                'Login',
                style: TextStyle(color: Color.fromARGB(253, 13, 152, 106), fontSize: 18),
              ),
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
    );
  }
}
