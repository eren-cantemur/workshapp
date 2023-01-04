import 'package:flutter/material.dart';

import '../../../model/review.dart';

class ReviewTile extends StatelessWidget {
  const ReviewTile({super.key, required this.review});
  final Review review;
  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(5.0),
      ),
      child: ListTile(
        title: Text(review.comment),
        // Use a StarRating widget to display the rating
        subtitle: StarRating(rating: review.rate),
      ),
    );
  }
}

class StarRating extends StatelessWidget {
  final int rating;
  const StarRating({super.key, required this.rating});
  List<Icon> getStars() {
    List<Icon> stars = [];
    for (int i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.add(Icon(Icons.star, color: Colors.yellow));
      } else {
        stars.add(Icon(Icons.star_border, color: Colors.yellow));
      }
    }
    return stars;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(0, 10, 0, 0),
      child: Row(
        children: getStars(),
      ),
    );
  }
}
