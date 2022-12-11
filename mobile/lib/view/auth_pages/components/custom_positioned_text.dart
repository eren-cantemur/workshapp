import 'package:flutter/material.dart';

class customText extends StatelessWidget {
  const customText({Key? key, required this.text, required this.textStyle}) : super(key: key);

  final String text;
  final TextStyle textStyle;
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        const Expanded(
          flex: 1,
          child: SizedBox(
            width: 1,
          ),
        ),
        Expanded(
          flex: 10,
          child: Text(
            text,
            style: textStyle,
          ),
        ),
        const Expanded(
          flex: 1,
          child: SizedBox(
            width: 1,
          ),
        ),
      ],
    );
  }
}
