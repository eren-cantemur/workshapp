import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../../controller/providers/feed_data_provider.dart';

class SearchBar extends StatelessWidget {
  final ValueChanged<String> onChanged;
  final TextEditingController controller;

  const SearchBar({
    Key? key,
    required this.onChanged,
    required this.controller,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Row(
        children: [
          Expanded(
            child: TextField(
              controller: controller,
              onChanged: onChanged,
              decoration: const InputDecoration(
                hintText: 'What are you looking for?',
                hintStyle: TextStyle(color: Colors.grey),
              ),
            ),
          ),
          const Icon(Icons.search)
        ],
      ),
    );
  }
}
