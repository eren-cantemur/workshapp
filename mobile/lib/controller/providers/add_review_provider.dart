import 'package:flutter/cupertino.dart';

class AddRatingRatingProvider extends ChangeNotifier {
  int _rating = 0;
  int get rating => _rating;

  void updateRating(int rat) {
    _rating = rat;
  }
}
