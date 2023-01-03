class Review {
  final int id;
  final int isApproved;
  final String comment;
  final int rate;
  final DateTime createdAt;
  final DateTime updatedAt;
  final int userId;
  final int workshopId;

  Review({
    required this.id,
    required this.isApproved,
    required this.comment,
    required this.rate,
    required this.createdAt,
    required this.updatedAt,
    required this.userId,
    required this.workshopId,
  });

  factory Review.fromJson(Map<String, dynamic> json) {
    return Review(
      id: json['id'],
      isApproved: json['isApproved'],
      comment: json['comment'],
      rate: json['rate'],
      createdAt: DateTime.parse(json['createdAt']),
      updatedAt: DateTime.parse(json['updatedAt']),
      userId: json['userId'],
      workshopId: json['workshopId'],
    );
  }
}
