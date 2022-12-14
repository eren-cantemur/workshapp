import 'package:flutter/material.dart';
import 'package:mobile/controller/networking_controller.dart';
import 'package:mobile/controller/providers/feed_data_provider.dart';
import 'package:mobile/controller/providers/reservations_data_provider.dart';
import 'package:mobile/view/auth/components/action_button.dart';
import 'package:mobile/view/home/components/custom_dialogue_2.dart';
import 'package:mobile/view/home/components/review_list.dart';
import 'package:provider/provider.dart';
import '../../../controller/providers/add_review_provider.dart';
import '../../../model/workshop_model.dart';
import '../components/add_review_widget.dart';

class WorkshopDetailPage extends StatefulWidget {
  const WorkshopDetailPage({super.key, required this.workshop});
  static String id = "detail_page";
  final Workshop workshop;

  @override
  State<WorkshopDetailPage> createState() => _WorkshopDetailPageState();
}

class _WorkshopDetailPageState extends State<WorkshopDetailPage> {
  bool signed = false;

  void checkSigned() {
    List<Workshop> reservations = Provider.of<ReservationsDataProvider>(context, listen: false).data;
    for (Workshop workshop in reservations) {}
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    checkSigned();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final scaffoldColor = theme.scaffoldBackgroundColor;

    return ChangeNotifierProvider(
      create: (BuildContext context) {
        return AddRatingRatingProvider();
      },
      child: Scaffold(
        backgroundColor: scaffoldColor,
        appBar: AppBar(
          backgroundColor: scaffoldColor,
          title: Text(
            widget.workshop.name,
            style: const TextStyle(color: Colors.black),
          ),
          iconTheme: const IconThemeData(
            color: Colors.black, //change your color here
          ),
        ),
        body: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Container(
                height: 300,
                child: Image.network(
                  widget.workshop.photo,
                  fit: BoxFit.cover,
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Row(
                      children: [
                        Expanded(
                          child: Text(
                            widget.workshop.name,
                            style: theme.textTheme.headline5,
                            overflow: TextOverflow.clip,
                            maxLines: 2,
                          ),
                        ),
                        Expanded(
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.end,
                            children: [
                              Text(
                                widget.workshop.owner,
                                style: theme.textTheme.headline5,
                                overflow: TextOverflow.clip,
                                maxLines: 1,
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8),
                    const Divider(
                      thickness: 1,
                    ),
                    const SizedBox(height: 8),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          'Capacity: ${widget.workshop.capacity}',
                          style: theme.textTheme.bodyText1?.copyWith(fontSize: 17),
                        ),
                      ],
                    ),
                    const SizedBox(height: 20),
                    Row(
                      children: [
                        Text(
                          "${widget.workshop.city} / ${widget.workshop.town}",
                          style: theme.textTheme.bodyText1?.copyWith(fontSize: 17),
                        ),
                      ],
                    ),
                    const Divider(
                      thickness: 1,
                    ),
                    const SizedBox(height: 8),
                    Text(
                      widget.workshop.description,
                      style: theme.textTheme.bodyText1?.copyWith(fontSize: 17),
                      maxLines: 2,
                    ),
                    const SizedBox(height: 16),
                    signed
                        ? const Center(
                            child: Text(
                              "You have signed up to this workshop!",
                              style: TextStyle(color: Colors.blue),
                            ),
                          )
                        : SignUpButton(
                            toDo: () {
                              setState(() {
                                signed = true;
                              });
                            },
                            id: widget.workshop.id,
                          ),
                  ],
                ),
              ),
              Row(
                children: const [
                  Padding(
                    padding: EdgeInsets.all(15.0),
                    child: Text(
                      'Reviews',
                      style: TextStyle(
                        fontSize: 24.0,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ],
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(8, 2, 8, 0),
                child: AddReviewWidget(
                  widgetId: widget.workshop.id,
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(8, 2, 8, 0),
                child: ReviewList(workshopId: widget.workshop.id.toString()),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class SignUpButton extends StatelessWidget {
  const SignUpButton({Key? key, required this.toDo, required this.id}) : super(key: key);

  final Function toDo;
  final int id;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 40,
      child: AuthButton(
        title: "Sign Up",
        nextPageId: "empty",
        function: () {
          showDialog<String>(
            context: context,
            builder: (BuildContext context) => CustomDialogWithOptions(
              title: "Confirmation",
              text:
                  "You request will send to workshop owner. When it is accepted, you will be added for this workshop by owner.",
              function: () {
                toDo.call();
                NetworkController.sendReservationRequest(context, id);
              },
            ),
          );
        },
      ),
    );
  }
}
