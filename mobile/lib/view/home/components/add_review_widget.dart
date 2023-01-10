import 'package:flutter/material.dart';
import 'package:mobile/controller/networking_controller.dart';
import 'package:mobile/view/home/components/star_rating.dart';
import 'package:provider/provider.dart';

import '../../../controller/providers/add_review_provider.dart';

class AddReviewWidget extends StatefulWidget {
  const AddReviewWidget({super.key, required this.widgetId});
  final int widgetId;
  @override
  _AddReviewWidgetState createState() => _AddReviewWidgetState();
}

class _AddReviewWidgetState extends State<AddReviewWidget> {
  final commentController = TextEditingController();
  // AdReviewController controller = AdReviewController();

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10.0),
      ),
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: [
            TextField(
              controller: commentController,
              decoration: const InputDecoration(hintText: 'Comment'),
            ),
            // Use the StarRatingWidget to allow the user to select a rating
            const SizedBox(
              height: 8,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                StarRatingWidget(),
                InkWell(
                  onTap: () {
                    submitReview(
                      commentController.text,
                      // Get the rating from the StarRatingWidget
                    );
                  },
                  child: const Text(
                    'Submit',
                    style: TextStyle(color: Colors.lightBlue, fontSize: 18),
                  ),
                ),
              ],
            ),
            const SizedBox(
              height: 8,
            ),
          ],
        ),
      ),
    );
  }

  void submitReview(String comment) {
    // Validate the input and submit the review to your backend API
    int rating = Provider.of<AddRatingRatingProvider>(context, listen: false).rating;
    NetworkController.sendReview(comment, rating, widget.widgetId, context);
  }
}
