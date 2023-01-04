import 'package:flutter/material.dart';

class CustomDialogWithOptions extends StatelessWidget {
  const CustomDialogWithOptions({Key? key, required this.title, required this.text, this.function}) : super(key: key);
  final String title;
  final String text;
  final Function? function;

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(10.0),
        ),
        title: Text(
          title,
          style: const TextStyle(
            fontSize: 24.0,
            fontWeight: FontWeight.bold,
          ),
        ),
        content: Text(
          text,
          style: const TextStyle(
            fontSize: 16.0,
          ),
        ),
        actions: [
          TextButton(
            onPressed: () {
              function?.call();
              Navigator.pop(context, 'Confirm');
            },
            child: const Text('Confirm'),
          ),
          TextButton(
            onPressed: () => Navigator.pop(context, 'Cancel'),
            child: const Text('Cancel'),
          ),
        ]);
  }
}
