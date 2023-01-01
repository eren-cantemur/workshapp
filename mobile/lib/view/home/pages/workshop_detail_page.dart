import 'package:flutter/material.dart';

import '../../../model/workshop_model.dart';

class WorkshopDetailPage extends StatefulWidget {
  const WorkshopDetailPage({required this.workshop});
  static String id = "detail_page";
  final Workshop workshop;

  @override
  State<WorkshopDetailPage> createState() => _WorkshopDetailPageState();
}

class _WorkshopDetailPageState extends State<WorkshopDetailPage> {
  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final scaffoldColor = theme.scaffoldBackgroundColor;

    return Scaffold(
      backgroundColor: scaffoldColor,
      appBar: AppBar(
        backgroundColor: scaffoldColor,
        title: Text(
          widget.workshop.name,
          style: TextStyle(color: Colors.black),
        ),
        iconTheme: const IconThemeData(
          color: Colors.black, //change your color here
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              height: 300,
              child: Image.network(
                widget.workshop.photo,
                fit: BoxFit.cover,
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        widget.workshop.name,
                        style: theme.textTheme.headline5,
                      ),
                      Text(
                        widget.workshop.owner,
                        style: theme.textTheme.headline5,
                      ),
                    ],
                  ),
                  SizedBox(height: 8),
                  Divider(
                    thickness: 1,
                  ),
                  SizedBox(height: 8),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        'Capacity: ${widget.workshop.capacity} person',
                        style: theme.textTheme.bodyText1?.copyWith(fontSize: 17),
                      ),
                      Row(
                        children: [
                          Text(
                            'City: ',
                            style: theme.textTheme.bodyText1?.copyWith(fontSize: 17),
                          ),
                          Text(
                            "${widget.workshop.city} / ${widget.workshop.town}",
                            style: theme.textTheme.bodyText1?.copyWith(fontSize: 17),
                          ),
                        ],
                      ),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Divider(
                    thickness: 1,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    widget.workshop.description,
                    style: theme.textTheme.bodyText1,
                  ),
                  const SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: () {
                      // Add code to handle button press
                    },
                    child: Text('Sign up'),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
