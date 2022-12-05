import 'package:flutter/cupertino.dart';

class AuthController extends ChangeNotifier {
  static void navigateToNextPage(String nextPageId, BuildContext context) {
    Navigator.pushNamed(context, nextPageId);
  }
}
