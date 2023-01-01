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
      return ListView.builder(
        physics: const NeverScrollableScrollPhysics(),
        shrinkWrap: true,
        itemCount: dataProvider.data.length,
        itemBuilder: (context, index) {
          return WorkshopCell(
            workshop: dataProvider.data[index],
            index: index,
          );
        },
      );
    });
  }
}
