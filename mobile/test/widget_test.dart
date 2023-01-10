import 'dart:math';

import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:http/http.dart';
import 'package:mobile/controller/local_data_controller.dart';
import 'package:mobile/model/app_text_data.dart';
import 'package:mobile/view/auth/components/action_button.dart';
import 'package:mobile/view/auth/components/custom_dialogue.dart';
import 'package:mobile/view/auth/components/custom_positioned_text.dart';

import 'package:flutter/material.dart';
import 'package:mobile/view/auth/components/search_bar_widget.dart';
import 'package:mobile/view/auth/pages/register_page.dart';
import 'package:mobile/view/auth/pages/welcome_page.dart';
import 'package:mobile/view/home/components/featured_card.dart';
import 'package:mobile/view/home/pages/home_page.dart';

void main() {
  group('COMPONENT WIDGET UNIT TESTS', () {
    testWidgets('Custom Text Widget Build Test', (tester) async {
      // Test code goes here.
      await tester.pumpWidget(const MaterialApp(
        home: Scaffold(
          body: CustomText(
            text: 'T',
            textStyle: TextStyle(),
          ),
        ),
      ));
      final customTextFinder = find.text("T");
      expect(customTextFinder, findsOneWidget);
    });

    testWidgets('Register Button Widget Build Test', (tester) async {
      // Test code goes here.
      await tester.pumpWidget(
        MaterialApp(home: Scaffold(body: AuthButton(title: "Register", nextPageId: RegisterPage.id))),
      );
      final titleFinder = find.text("Register");
      expect(titleFinder, findsOneWidget);
    });

    testWidgets('Search Field Widget Build Test', (tester) async {
      // Test code goes here.
      await tester.pumpWidget(
        MaterialApp(
          home: Scaffold(
            body: SearchBar(
              controller: TextEditingController(),
              onChanged: (String text) {},
            ),
          ),
        ),
      );
      final hintFinder = find.text('What are you looking for?');
      expect(hintFinder, findsOneWidget);
    });

    testWidgets('CustomDialogue Build Test', (tester) async {
      // Test code goes here.
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: CustomDialog(
              title: 'T',
              text: 'message',
            ),
          ),
        ),
      );

      final messageFinder = find.text('message');
      final titleFinder = find.text('T');
      expect(messageFinder, findsOneWidget);
      expect(titleFinder, findsOneWidget);
    });

    testWidgets('Feature Card Build Test', (tester) async {
      // Test code goes here.
      await tester.pumpWidget(
        const MaterialApp(
          home: Scaffold(
            body: FeaturedCard(),
          ),
        ),
      );

      final messageFinder = find.text(
        "Tum içecek workshoplarinda -%30!",
      );
      expect(messageFinder, findsOneWidget);
    });
  });

  group("LOCAL DATA MANAGEMENT UNIT TESTS", () {
    setUpAll(() {
      FlutterSecureStorage.setMockInitialValues({});
    });
    test('Write and read from device storage Test', () async {
      String tokenToSave = "xyz";
      await LocalDataController.saveJwt(tokenToSave);
      String? readedToken = await LocalDataController.readJWT();
      expect(readedToken, "Bearer $tokenToSave");
    });

    test('Delete from device storage test', () async {
      await LocalDataController.deleteJWT();
      String? readedToken = await LocalDataController.readJWT();
      expect(readedToken, null);
    });
  });
}
