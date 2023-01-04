import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'package:mobile/controller/networking_controller.dart';
import 'package:mobile/view/home/components/review_cell.dart';
import 'package:mobile/view/home/components/star_rating.dart';
import 'package:provider/provider.dart';
import 'dart:convert';

import '../../../controller/providers/add_review_provider.dart';
import '../../../model/review.dart';
import '../../auth/components/action_button.dart';

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
          if (snapshot.data!.isEmpty) {
            return const Padding(
              padding: EdgeInsets.all(15.0),
              child: Text("No reviews yet :("),
            );
          }
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
