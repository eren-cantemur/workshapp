import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:mobile/model/workshop_model.dart';

class WorkshopCell extends StatelessWidget {
  const WorkshopCell({super.key, required this.workshop, required this.index});
  final Workshop workshop;
  final int index;
  final Color backgroundcolor1 = const Color.fromRGBO(220, 232, 214, 1);
  final Color backgroundcolor2 = const Color.fromRGBO(214, 228, 232, 1);

  @override
  Widget build(BuildContext context) {
    final height = MediaQuery.of(context).size.height;
    return Padding(
      padding: const EdgeInsets.fromLTRB(3, 0, 3, 15),
      child: SizedBox(
        height: MediaQuery.of(context).size.height / 6,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(10, 0, 10, 5),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(30),
            child: Card(
              color: index % 2 == 0 ? backgroundcolor1 : backgroundcolor2,
              child: Row(
                children: [
                  Expanded(
                    flex: 5,
                    child: Padding(
                      padding: const EdgeInsets.all(5.0),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(15),
                        child: Image(
                          height: height / 7,
                          fit: BoxFit.cover,
                          image: NetworkImage(
                            workshop.imageURL,
                          ),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 8,
                  ),
                  Expanded(
                    flex: 10,
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Expanded(
                          flex: 10,
                          child: SizedBox(
                            width: 2,
                          ),
                        ),
                        Expanded(
                          flex: 11,
                          child: Text(
                            workshop.name,
                            style: TextStyle(
                                fontSize: height / 45,
                                color: const Color.fromRGBO(0, 33, 64, 1),
                                fontWeight: FontWeight.w600),
                          ),
                        ),
                        Expanded(
                          flex: 7,
                          child: Text(
                            workshop.owner,
                            style: TextStyle(
                                fontSize: height / 60,
                                color: const Color.fromRGBO(0, 33, 64, 1),
                                fontWeight: FontWeight.w400),
                          ),
                        ),
                        const Expanded(
                          flex: 10,
                          child: SizedBox(
                            width: 10,
                          ),
                        ),
                        Expanded(
                          flex: 10,
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              const Icon(Icons.location_on_outlined),
                              Text(
                                workshop.location,
                                style: TextStyle(
                                  fontSize: height / 50,
                                  color: const Color.fromRGBO(0, 33, 64, 1),
                                  fontWeight: FontWeight.w500,
                                ),
                              ),
                              const SizedBox(
                                width: 20,
                              ),
                              const Icon(Icons.currency_lira),
                              Text(
                                workshop.price,
                                style: TextStyle(
                                    fontSize: height / 50,
                                    color: const Color.fromRGBO(0, 33, 64, 1),
                                    fontWeight: FontWeight.w500),
                              ),
                            ],
                          ),
                        ),
                        Expanded(
                          flex: 7,
                          child: Column(
                            children: [],
                          ),
                        )
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
