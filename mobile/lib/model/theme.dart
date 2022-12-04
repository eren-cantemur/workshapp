import 'package:flutter/material.dart';

class CustomTheme {
  static ThemeData CustomThemDataLight = ThemeData(
    colorScheme: ColorScheme.fromSeed(seedColor: const Color.fromARGB(253, 13, 152, 106)),
    textTheme: const TextTheme(bodyText2: TextStyle(color: Colors.purple)),
  );
}
