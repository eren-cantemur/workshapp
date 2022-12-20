import 'package:flutter/cupertino.dart';
import 'package:mobile/model/workshop_model.dart';

class WorkshopCell extends StatelessWidget {
  const WorkshopCell({super.key, required this.workshop});
  final Workshop workshop;

  @override
  Widget build(BuildContext context) {
    return Text(workshop.name);
  }
}
