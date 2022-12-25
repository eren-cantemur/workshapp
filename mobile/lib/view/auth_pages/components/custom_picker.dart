import 'package:flutter/material.dart';

class CustomPickerField extends StatefulWidget {
  const CustomPickerField({super.key, required this.items, required this.name});
  final List<String> items;
  final String name;

  @override
  _CustomPickerFieldState createState() => _CustomPickerFieldState();
}

class _CustomPickerFieldState extends State<CustomPickerField> {
  @override
  Widget build(BuildContext context) {
    String dropdownValue = widget.items.first;
    return Column(
      children: [
        Row(
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
                style: const TextStyle(fontSize: 18, color: Color.fromRGBO(54, 67, 86, 1), fontWeight: FontWeight.w600),
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
        const SizedBox(
          height: 10,
        ),
        Row(
          children: [
            const Expanded(
              flex: 1,
              child: SizedBox(
                height: 1,
              ),
            ),
            Expanded(
              flex: 10,
              child: DropdownButtonFormField(
                decoration: InputDecoration(
                  fillColor: Colors.white,
                  filled: true,
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
                value: dropdownValue,
                items: widget.items.map<DropdownMenuItem<String>>((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(
                      value,
                      style: const TextStyle(
                          color: Color.fromRGBO(99, 109, 119, 1), fontSize: 18, fontWeight: FontWeight.w600),
                    ),
                  );
                }).toList(),
                onChanged: (Object? value) {},
              ),
            ),
            const Expanded(
              flex: 1,
              child: SizedBox(
                height: 1,
              ),
            ),
          ],
        ),
      ],
    );
  }
}
