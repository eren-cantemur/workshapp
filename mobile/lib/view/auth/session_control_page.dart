import 'package:flutter/material.dart';
import 'package:mobile/controller/session_controller.dart';

class SessionControlPage extends StatefulWidget {
  const SessionControlPage({Key? key}) : super(key: key);
  static String id = "session";

  @override
  State<SessionControlPage> createState() => _SessionControlPageState();
}

class _SessionControlPageState extends State<SessionControlPage> {
  @override
  void initState() {
    super.initState();
    SessionController.controlSession(context);
  }

  @override
  Widget build(BuildContext context) {
    return const CircularProgressIndicator();
  }
}
