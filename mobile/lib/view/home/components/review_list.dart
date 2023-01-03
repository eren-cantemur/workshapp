import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:mobile/controller/networking_controller.dart';
import 'dart:convert';

import '../../../model/review.dart';

class ReviewList extends StatefulWidget {
  const ReviewList({super.key, required this.workshopId});
  final String workshopId;
  @override
  _ReviewListState createState() => _ReviewListState();
}

class _ReviewListState extends State<ReviewList> {
  // Declare a list of Review objects
  late Future<List<Review>> reviews;

  @override
  void initState() {
    super.initState();
    // Make the HTTP GET request to retrieve the list of reviews
    reviews = NetworkController.getReviews(widget.workshopId, context);
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Review>>(
      future: reviews,
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          if (snapshot.data!.isEmpty)
            return Padding(
              padding: const EdgeInsets.all(15.0),
              child: const Text("No reviews yet :("),
            );
          return ListView.builder(
            physics: const NeverScrollableScrollPhysics(),
            shrinkWrap: true,
            itemCount: snapshot.data!.length,
            itemBuilder: (context, index) {
              // Return a widget for each review in the list
              return ReviewTile(review: snapshot.data![index]);
            },
          );
        } else if (snapshot.hasError) {
          return Text("${snapshot.error}");
        }
        // Show a loading indicator while the data is being fetched
        return const CircularProgressIndicator();
      },
    );
  }
}

class ReviewTile extends StatelessWidget {
  const ReviewTile({super.key, required this.review});
  final Review review;
  @override
  Widget build(BuildContext context) {
    return Card(
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
