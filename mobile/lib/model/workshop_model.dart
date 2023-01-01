import 'dart:ffi';

class Workshop {
  Workshop({
    required this.name,
    required this.location,
    required this.price,
    required this.owner,
    required this.imageURL,
    required this.description,
    required this.capacity,
  });
  final String name;
  final String location;
  final String price;
  final String owner;
  final String imageURL;
  final String description;
  final int capacity;
}
