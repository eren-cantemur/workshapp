import 'package:flutter/material.dart';
import 'dart:io';

import 'package:image_picker/image_picker.dart';
import 'package:mobile/controller/auth_controller.dart';
import 'package:mobile/view/auth_pages/components/action_button.dart';
import 'package:mobile/view/auth_pages/components/auth_input_field.dart';

class ProfilePhotoNamePage extends StatefulWidget {
  const ProfilePhotoNamePage({Key? key}) : super(key: key);
  static String id = "profilePhoto";

  @override
  State<ProfilePhotoNamePage> createState() => _ProfilePhotoNamePageState();
}

class _ProfilePhotoNamePageState extends State<ProfilePhotoNamePage> {
  File? _image;
  final TextEditingController _nameTextFieldController = TextEditingController();
  AuthController authController = AuthController();
  void imageRequest() async {
    File? imageTemp = await authController.getImage();
    setState(() {
      _image = imageTemp;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SizedBox(
        height: MediaQuery.of(context).size.height,
        child: SingleChildScrollView(
          child: SizedBox(
            height: MediaQuery.of(context).size.height,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                const Expanded(
                  flex: 25,
                  child: SizedBox(
                    width: 1,
                  ),
                ),
                Expanded(
                  flex: 35,
                  child: Container(
                    child: _image != null
                        ? CircleAvatar(
                            backgroundColor: Colors.white,
                            radius: 200,
                            backgroundImage: FileImage(_image!),
                          )
                        : CircleAvatar(
                            radius: 200,
                            backgroundColor: Colors.white,
                            child: Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                InkWell(
                                  onTap: () {
                                    imageRequest();
                                  },
                                  child: const Text(
                                    'SELECT',
                                    style: TextStyle(color: Colors.blueAccent, fontSize: 20),
                                  ),
                                ),
                              ],
                            ),
                          ),
                  ),
                ),
                const SizedBox(
                  height: 20,
                ),
                const Text(
                  "Profile Photo",
                  style: TextStyle(color: Color.fromRGBO(54, 67, 86, 1), fontSize: 15),
                ),
                _image != null
                    ? Column(
                        children: [
                          Padding(
                            padding: const EdgeInsets.all(10.0),
                            child: InkWell(
                              onTap: () {
                                imageRequest();
                              },
                              child: const Text(
                                'RESELECT',
                                style: TextStyle(color: Colors.blueAccent, fontSize: 17),
                              ),
                            ),
                          ),
                        ],
                      )
                    : const Expanded(
                        flex: 10,
                        child: SizedBox(
                          width: 1,
                        ),
                      ),
                Expanded(
                  flex: 12,
                  child: AuthInputField(
                      controller: _nameTextFieldController, name: "Name", hint: "example name", obscure: false),
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
                const Expanded(
                  flex: 2,
                  child: SizedBox(
                    width: 1,
                  ),
                ),
                Expanded(
                  flex: 7,
                  child: AuthButton(
                    title: "Save",
                    nextPageId: "not yet",
                    function: () {
                      authController.saveNameAndPhoto();
                    },
                  ),
                ),
                const Expanded(
                  flex: 11,
                  child: SizedBox(
                    width: 1,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
