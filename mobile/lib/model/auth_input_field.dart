import 'package:flutter/material.dart';

class AuthInputField extends StatelessWidget {
  const AuthInputField({Key? key, required this.name, required this.hint}) : super(key: key);

  final String name;
  final String hint;
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
                  name,
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
                  decoration: InputDecoration(
                    fillColor: Colors.white,
                    filled: true,
                    hintText: hint,
                    enabledBorder: OutlineInputBorder(
                      borderSide: const BorderSide(color: Color.fromARGB(0, 13, 152, 106), width: 0.0),
                      borderRadius: BorderRadius.circular(8.0),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderSide: const BorderSide(color: Color.fromARGB(252, 13, 152, 106), width: 1.0),
                      borderRadius: BorderRadius.circular(8.0),
                    ),
                    // labelText: hint,
                    focusColor: Color.fromARGB(253, 13, 152, 106),
                    prefixStyle: const TextStyle(
                      color: Color.fromARGB(253, 13, 152, 106),
                    ),
                  ),
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
