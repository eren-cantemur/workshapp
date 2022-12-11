import 'package:flutter/material.dart';
import 'dart:io';

import 'package:image_picker/image_picker.dart';
import 'package:mobile/view/auth_pages/components/action_button.dart';

class ProfilePhotoNamePage extends StatefulWidget {
  const ProfilePhotoNamePage({Key? key}) : super(key: key);
  static String id = "profilePhoto";

  @override
  State<ProfilePhotoNamePage> createState() => _ProfilePhotoNamePageState();
}

class _ProfilePhotoNamePageState extends State<ProfilePhotoNamePage> {
  File? _image;
  final picker = ImagePicker();

  Future getImage() async {
    final pickedFile =
        await picker.pickImage(source: ImageSource.gallery, maxHeight: 1500, maxWidth: 1500, imageQuality: 50);
    if (pickedFile != null) {
      setState(() {
        _image = File(pickedFile.path);
      });
    } else {
      print('No image selected.');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
            flex: 25,
            child: SizedBox(
              width: 1,
            ),
          ),
          Expanded(
            flex: 35,
            child: Container(
              child: _image != null
                  ? Center(
                      child: CircleAvatar(
                        backgroundColor: Colors.white,
                        radius: 200,
                        backgroundImage: FileImage(_image!),
                      ),
                    )
                  : CircleAvatar(
                      radius: 200,
                      backgroundColor: Colors.white,
                      child: Text(
                        "no image selected",
                        style: TextStyle(color: Theme.of(context).primaryColor),
                      ),
                    ),
            ),
          ),
          const Expanded(
            flex: 2,
            child: SizedBox(
              width: 1,
            ),
          ),
          const Expanded(
            flex: 25,
            child: SizedBox(
              width: 1,
            ),
          ),
          const Expanded(
            flex: 7,
            child: SizedBox(
              width: 5,
            ),
          ),
          Expanded(
            flex: 7,
            child: AuthButton(
              title: "Select",
              nextPageId: "not yet",
              givenColor: Colors.green.shade400,
              function: () {
                getImage();
              },
            ),
          ),
          const Expanded(
            flex: 2,
            child: SizedBox(
              width: 1,
            ),
          ),
          Expanded(
            flex: 7,
            child: AuthButton(title: "Save", nextPageId: "not yet"),
          ),
          const Expanded(
            flex: 11,
            child: SizedBox(
              width: 1,
            ),
          ),
        ],
      ),
    );
  }
}
