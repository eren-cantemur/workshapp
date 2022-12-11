import 'package:flutter/material.dart';
import 'package:mobile/view/auth_pages/components/action_button.dart';
import 'package:mobile/view/auth_pages/components/custom_positioned_text.dart';

import '../components/custom_picker.dart';

class ProfileInfoPage extends StatefulWidget {
  const ProfileInfoPage({Key? key}) : super(key: key);
  static String id = "profile";
  @override
  State<ProfileInfoPage> createState() => _ProfileInfoPageState();
}

class _ProfileInfoPageState extends State<ProfileInfoPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox(
        height: MediaQuery.of(context).size.height,
        child: SingleChildScrollView(
          child: SizedBox(
            height: MediaQuery.of(context).size.height,
            child: Column(
              children: [
                const Expanded(
                  flex: 10,
                  child: SizedBox(
                    width: 1,
                  ),
                ),
                const Expanded(
                  flex: 5,
                  child: customText(
                    text: "Location",
                    textStyle:
                        TextStyle(color: Color.fromRGBO(54, 67, 86, 1), fontSize: 25, fontWeight: FontWeight.w600),
                  ),
                ),
                const Expanded(
                  flex: 5,
                  child: SizedBox(
                    width: 1,
                  ),
                ),
                const CustomPickerField(
                  items: ["Istanbul", "Izmir", "Ankara", "Bursa"],
                  name: "City",
                ),
                const Expanded(
                  flex: 4,
                  child: SizedBox(
                    height: 1,
                  ),
                ),
                const CustomPickerField(
                  items: ["Istanbul", "Izmir", "Ankara", "Bursa"],
                  name: "District",
                ),
                const Expanded(
                  flex: 4,
                  child: SizedBox(
                    height: 20,
                  ),
                ),
                const Expanded(
                  flex: 5,
                  child: customText(
                    text: "We will use this to show you closer workshops more.",
                    textStyle: TextStyle(
                      color: Color.fromRGBO(99, 109, 119, 1),
                      fontSize: 15,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
                const Expanded(
                  flex: 55,
                  child: SizedBox(
                    height: 10,
                  ),
                ),
                Expanded(
                  flex: 7,
                  child: AuthButton(
                    title: "Register",
                    nextPageId: "notyet",
                  ),
                ),
                const Expanded(
                  flex: 18,
                  child: SizedBox(
                    height: 10,
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}

//User profile infos: adress, name, profile info
