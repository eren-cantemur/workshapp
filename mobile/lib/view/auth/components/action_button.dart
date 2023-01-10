import 'package:flutter/material.dart';
import 'package:mobile/controller/auth_controller.dart';

class AuthButton extends StatelessWidget {
  AuthButton({Key? key, required this.title, required this.nextPageId, this.givenColor, this.function})
      : super(key: key);
  final String title;
  String nextPageId;
  Color? givenColor;
  Function? function;

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const Expanded(
          flex: 20,
          child: SizedBox(
            height: 2,
          ),
        ),
        Expanded(
          flex: 65,
          child: ElevatedButton(
            style: ButtonStyle(
              backgroundColor: MaterialStateProperty.all<Color>(
                givenColor != null ? givenColor! : Theme.of(context).primaryColor,
              ),
              shape: MaterialStateProperty.all<RoundedRectangleBorder>(
                RoundedRectangleBorder(borderRadius: BorderRadius.circular(12.0)),
              ),
            ),
            onPressed: () {
              function == null ? AuthController.navigateToNextPage(nextPageId, context) : function!.call();
            },
            child: Text(
              title,
              style: const TextStyle(fontSize: 20),
            ),
          ),
        ),
        const Expanded(
          flex: 20,
          child: SizedBox(
            height: 2,
          ),
        ),
      ],
    );
  }
}
