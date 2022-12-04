import 'package:flutter/material.dart';

class AuthButton extends StatelessWidget {
  const AuthButton({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Expanded(
      flex: 7,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Expanded(
            flex: 19,
            child: SizedBox(
              height: 2,
            ),
          ),
          Expanded(
            flex: 62,
            child: ElevatedButton(
              style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all<Color>(const Color.fromARGB(253, 13, 152, 106)),
                shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                  RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.0)),
                ),
              ),
              onPressed: () {},
              child: const Text(
                "Register",
                style: TextStyle(fontSize: 20),
              ),
            ),
          ),
          const Expanded(
            flex: 19,
            child: SizedBox(
              height: 2,
            ),
          ),
        ],
      ),
    );
  }
}
