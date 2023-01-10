import 'package:flutter/material.dart';

class AuthInputField extends StatefulWidget {
  const AuthInputField(
      {Key? key, required this.controller, required this.name, required this.hint, required this.obscure})
      : super(key: key);

  final String name;
  final String hint;
  final bool obscure;
  final TextEditingController controller;

  @override
  State<AuthInputField> createState() => _AuthInputFieldState();
}

class _AuthInputFieldState extends State<AuthInputField> {
  late final TextEditingController _controller;

  @override
  void initState() {
    super.initState();
    _controller = widget.controller;
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(
          flex: 2,
          child: Row(
            children: [
              const Expanded(
                flex: 1,
                child: SizedBox(
                  height: 10,
                ),
              ),
              Expanded(
                flex: 10,
                child: Text(
                  widget.name,
                  style: const TextStyle(
                      fontSize: 16, color: Color.fromRGBO(99, 109, 119, 1), fontWeight: FontWeight.w500),
                ),
              ),
              const Expanded(
                flex: 1,
                child: SizedBox(
                  width: 1,
                ),
              ),
            ],
          ),
        ),
        const Expanded(
          flex: 1,
          child: SizedBox(
            width: 5,
          ),
        ),
        Expanded(
          flex: 5,
          child: Row(
            children: [
              const Expanded(
                flex: 1,
                child: SizedBox(
                  height: 10,
                ),
              ),
              Expanded(
                flex: 10,
                child: TextField(
                  controller: _controller,
                  decoration: InputDecoration(
                    fillColor: Colors.white,
                    filled: true,
                    hintText: widget.hint,
                    enabledBorder: OutlineInputBorder(
                      borderSide: const BorderSide(color: Color.fromARGB(0, 13, 152, 106), width: 0.0),
                      borderRadius: BorderRadius.circular(8.0),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Theme.of(context).primaryColor, width: 1.0),
                      borderRadius: BorderRadius.circular(8.0),
                    ),
                    // labelText: hint,
                    focusColor: Theme.of(context).primaryColor,
                  ),
                  obscureText: widget.obscure,
                ),
              ),
              const Expanded(
                flex: 1,
                child: SizedBox(
                  height: 10,
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
