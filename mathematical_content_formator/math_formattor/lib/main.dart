import 'package:flutter/material.dart';
import 'package:math_formattor/constant.dart';
import 'package:catex/catex.dart';
import 'package:katex_flutter/katex_flutter.dart';
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

class MyCustomFormState extends State < MyCustomForm > {
  late TextEditingController myController;

  @override
  void initState() {
    myController = TextEditingController(text: "Example: \$\\sum^{100}_{u=1} u*0 \\lt 1\$");
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
          flex: 2,
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 8, vertical: 16),
            child: beautify('${myController.text}'),
          ),
        ),
      ],
    );
  }
}

KaTeX beautify(text) {
  //  return CaTeX(text); \text { example ... }
  return KaTeX(laTeXCode: Text(text));

}