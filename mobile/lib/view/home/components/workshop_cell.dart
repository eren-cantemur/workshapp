import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:mobile/model/workshop_model.dart';
import 'package:mobile/view/home/pages/home_page.dart';
import 'package:mobile/view/home/pages/workshop_detail_page.dart';

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
      padding: EdgeInsets.fromLTRB(3, 0, 3, height / 40),
      child: SizedBox(
        height: MediaQuery.of(context).size.height / 7,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(10, 0, 10, 5),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(30),
            child: InkWell(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => WorkshopDetailPage(workshop: workshop),
                  ),
                );
              },
              child: Card(
                color: index % 2 == 0 ? backgroundcolor1 : backgroundcolor2,
                child: Row(
                  children: [
                    Expanded(
                      flex: 6,
                      child: Padding(
                        padding: const EdgeInsets.all(0.0),
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(15),
                          child: Image(
                            height: height / 7,
                            fit: BoxFit.cover,
                            image: NetworkImage(
                              workshop.photo,
                            ),
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(
                      width: 15,
                    ),
                    Expanded(
                      flex: 10,
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Expanded(
                            flex: 8,
                            child: SizedBox(
                              width: 2,
                            ),
                          ),
                          Expanded(
                            flex: 13,
                            child: Text(
                              workshop.name,
                              style: TextStyle(
                                fontSize: height / 50,
                                color: const Color.fromRGBO(0, 33, 64, 1),
                                fontWeight: FontWeight.w600,
                                fontFamily: GoogleFonts.poppins().fontFamily,
                              ),
                            ),
                          ),
                          SizedBox(
                            height: 4,
                          ),
                          Expanded(
                            flex: 10,
                            child: Text(
                              workshop.owner,
                              style: TextStyle(
                                fontSize: height / 65,
                                color: const Color.fromRGBO(0, 33, 64, 1),
                                fontWeight: FontWeight.w400,
                                fontFamily: GoogleFonts.poppins().fontFamily,
                              ),
                            ),
                          ),
                          const Expanded(
                            flex: 10,
                            child: SizedBox(
                              width: 10,
                            ),
                          ),
                          Expanded(
                            flex: 12,
                            child: Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                const Icon(Icons.location_on_outlined),
                                Text(
                                  workshop.city,
                                  style: TextStyle(
                                    fontSize: height / 55,
                                    color: const Color.fromRGBO(0, 33, 64, 1),
                                    fontWeight: FontWeight.w500,
                                    fontFamily: GoogleFonts.poppins().fontFamily,
                                  ),
                                ),
                                const SizedBox(
                                  width: 20,
                                ),
                                Text(
                                  workshop.town,
                                  style: TextStyle(
                                    fontSize: height / 55,
                                    color: const Color.fromRGBO(0, 33, 64, 1),
                                    fontWeight: FontWeight.w500,
                                    fontFamily: GoogleFonts.poppins().fontFamily,
                                  ),
                                ),
                              ],
                            ),
                          ),
                          const Expanded(
                            flex: 7,
                            child: SizedBox(
                              width: 1,
                            ),
                          )
                        ],
                      ),
                    ),
                    Icon(
                      Icons.keyboard_arrow_right,
                      color: Colors.blueGrey,
                      size: height / 40,
                    )
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
