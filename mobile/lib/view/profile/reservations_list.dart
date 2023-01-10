import 'package:flutter/material.dart';
import 'package:mobile/controller/reservations_data_provider.dart';
import 'package:provider/provider.dart';

import '../home/components/workshop_cell.dart';

class ReservationList extends StatefulWidget {
  const ReservationList({Key? key}) : super(key: key);

  @override
  State<ReservationList> createState() => _ReservationListState();
}

class _ReservationListState extends State<ReservationList> {
  @override
  Widget build(BuildContext context) {
    return Consumer<ReservationsDataProvider>(builder: (context, dataProvider, child) {
      return dataProvider.data.length != 0
          ? ListView.builder(
              physics: const NeverScrollableScrollPhysics(),
              shrinkWrap: true,
              itemCount: dataProvider.data.length,
              itemBuilder: (context, index) {
                return WorkshopCell(
                  workshop: dataProvider.data[index],
                  index: index,
                );
              },
            )
          : Column(
              children: [
                Row(
                  children: const [
                    Padding(
                      padding: EdgeInsets.all(15.0),
                      child: Text(
                        "No reservation yet :(",
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                  ],
                ),
                Row(
                  children: const [
                    Padding(
                      padding: EdgeInsets.fromLTRB(15, 5, 0, 0),
                      child: Text(
                        "You can find suitable workshops\nfor you in home page!",
                        maxLines: 2,
                        style: TextStyle(fontSize: 20),
                      ),
                    ),
                  ],
                ),
              ],
            );
    });
  }
}
