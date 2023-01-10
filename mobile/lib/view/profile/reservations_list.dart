import 'package:flutter/material.dart';
import 'package:mobile/controller/providers/reservations_data_provider.dart';
import 'package:provider/provider.dart';

import '../home/components/workshop_cell.dart';

class ReservationList extends StatefulWidget {
  const ReservationList({Key? key}) : super(key: key);

  @override
  State<ReservationList> createState() => _ReservationListState();
}

class _ReservationListState extends State<ReservationList> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    Provider.of<ReservationsDataProvider>(context, listen: false).updateData(context);
  }

  @override
  Widget build(BuildContext context) {
    return Consumer<ReservationsDataProvider>(builder: (context, dataProvider, child) {
      return dataProvider.data.isNotEmpty
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
          : Row(
              children: const [
                Padding(
                  padding: EdgeInsets.fromLTRB(15, 5, 0, 0),
                  child: Text(
                    "No reservation yet :(\nYou can find suitable workshops for\nyou in home page!",
                    maxLines: 3,
                    style: TextStyle(fontSize: 18),
                  ),
                ),
              ],
            );
    });
  }
}
