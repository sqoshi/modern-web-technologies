import 'package:flutter/material.dart';
import 'package:math_formattor/constant.dart';
import 'package:catex/catex.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Math Formattor',
      theme: ThemeData(
        primaryColor: kPrimaryColor,
      ),
      home: Scaffold(
        body: MyCustomForm(),
      ),
    );
  }
}

class MyCustomForm extends StatefulWidget {
  @override
  MyCustomFormState createState() {
    return MyCustomFormState();
  }
}
// Container(
//           child: TextField(
//             decoration: InputDecoration(
//               border: OutlineInputBorder(),
//               hintText: 'Enter a search term'
//             ),
//           ),
//         ),

class MyCustomFormState extends State < MyCustomForm > {
  // final myController = TextEditingController();
  // @override
  // void dispose() {
  //   myController.dispose();
  //   super.dispose();
  // }
  late TextEditingController myController;

  @override
  void initState() {
    myController = TextEditingController();
    myController.addListener(() {
      setState(() {});
    });
    super.initState();
  }

  @override
  void dispose() {
    myController.dispose();
    super.dispose();
  }


  @override
  Widget build(BuildContext context) {
    bool isScreenWide =
      MediaQuery.of(context).size.width >= kMinWidthOfLargeScreen;
    return Flex(
      direction: isScreenWide ? Axis.horizontal : Axis.vertical,
      // children: <Widget>[
      //   Text('Current Value: ${myController.text}'),
      //   TextField(
      //     controller: myController,
      //   ),
      // ],
      children: < Widget > [
        Expanded(
          flex: 1,
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 8, vertical: 16),
            child: TextField(
              controller: myController,
              keyboardType: TextInputType.multiline,
              maxLines: null,
              decoration: InputDecoration(
                border: OutlineInputBorder(),
                hintText: 'Latex',
              ),
            ),
          ),
        ),
        Expanded(
          flex: 1,
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 8, vertical: 16),
            child: CaTeX('${myController.text}'),
            // TextField(
            //   keyboardType: TextInputType.multiline,
            //   maxLines: null,
            //   readOnly: true,
            //   decoration: InputDecoration(
            //     border: UnderlineInputBorder(),
            //     labelText: 'Result'
            //   ),
            // ),
          ),
        ),
      ],
    );
  }
}