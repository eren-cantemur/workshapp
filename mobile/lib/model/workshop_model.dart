import 'dart:convert';

class Workshop {
  Workshop({
    required this.id,
    required this.name,
    required this.photo,
    required this.capacity,
    required this.city,
    required this.town,
    required this.workshopManagerId,
    required this.workshopImages,
    required this.reviews,
    required this.owner,
    required this.category,
    required this.description,
  });
  final int id;
  final String name;
  final String photo;
  final int capacity;
  final String city;
  final String town;
  final int workshopManagerId;
  final List<String> workshopImages;
  final List<String> reviews;
  final String owner;
  final String category;
  final String description;

  factory Workshop.fromJson(Map<String, dynamic> json) {
    return Workshop(
      id: json['id'],
      name: json['name'],
      photo: json['photo'],
      capacity: json['capacity'],
      city: json['address']['city'],
      town: json['address']['county'],
      workshopManagerId: json['workshopManagerId'],
      workshopImages: json['workshopImages'] != null ? List<String>.from(json['workshopImages']) : [],
      reviews: json['reviews'] != null ? List<String>.from(json['reviews']) : [],
      owner: json['workshopManager']['name'],
      category: json['category']['name'],
      description: json['description'],
    );
  }
}
// {id: 1, name: test, isApproved: 1, description: test, photo: https://workshapps3.s3.eu-central-1.amazonaws.com/1672579833295.jpg,
// capacity: 10, createdAt: 2023-01-01T13:30:35.000Z, updatedAt: 2023-01-01T13:30:35.000Z, workshopManagerId: 8, categoryId: 1,
// addressId: 3, address: {id: 3, lat: null, long: null, country: turkey, city: Istanbul, county: Kadıköy, postalCode: 34080,
// openAddress: 2.sokak, createdAt: 2023-01-01T13:30:22.000Z, updatedAt: 2023-01-01T13:30:22.000Z}, workshopImages: [], reviews: [],
// category: {id: 1, name: Müzik, createdAt: 2023-01-01T12:15:54.000Z, updatedAt: 2023-01-01T12:15:54.000Z}}
