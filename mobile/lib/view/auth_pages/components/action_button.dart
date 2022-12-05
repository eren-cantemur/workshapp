import 'package:flutter/material.dart';
import 'package:mobile/controller/auth_controller.dart';

class AuthButton extends StatelessWidget {
  const AuthButton({Key? key, required this.title, required this.nextPageId}) : super(key: key);
  final String title;
  final String nextPageId;
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
                backgroundColor: MaterialStateProperty.all<Color>(
                  Theme.of(context).primaryColor,
                ),
                shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                  RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.0)),
                ),
              ),
              onPressed: () {
                AuthController.navigateToNextPage(nextPageId, context);
              },
              child: Text(
                title,
                style: const TextStyle(fontSize: 20),
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
