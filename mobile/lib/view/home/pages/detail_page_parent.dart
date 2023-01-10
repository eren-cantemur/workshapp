import 'package:flutter/material.dart';
import 'package:mobile/view/home/pages/workshop_detail_page.dart';
import 'package:provider/provider.dart';

import '../../../controller/providers/reservations_data_provider.dart';
import '../../../model/workshop_model.dart';

class DetailParent extends StatefulWidget {
  const DetailParent({Key? key, required this.workshop}) : super(key: key);
  static String id = "detail_parent_page";
  final Workshop workshop;

  @override
  State<DetailParent> createState() => _DetailParentState();
}

class _DetailParentState extends State<DetailParent> {
  @override
  Widget build(BuildContext context) {
    return MultiProvider(providers: [
      ChangeNotifierProvider(create: (_) => ReservationsDataProvider(context)),
    ], child: WorkshopDetailPage(workshop: widget.workshop));
  }
}
