import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../../controller/providers/add_review_provider.dart';

class StarRatingWidget extends StatefulWidget {
  StarRatingWidget({super.key, this.function});
  Function? function;
  @override
  _StarRatingWidgetState createState() => _StarRatingWidgetState();
}

class _StarRatingWidgetState extends State<StarRatingWidget> {
  int _rating = 0;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        for (int i = 1; i <= 5; i++)
          InkWell(
            onTap: () {
              // Update the rating and rebuild the widget
              //todo provider update
              Provider.of<AddRatingRatingProvider>(context, listen: false).updateRating(i);
              setState(() {
                _rating = i;
              });
            },
            child: Icon(
              i <= _rating ? Icons.star : Icons.star_border,
              color: Colors.yellow,
              size: 40,
            ),
          ),
      ],
    );
  }
}
