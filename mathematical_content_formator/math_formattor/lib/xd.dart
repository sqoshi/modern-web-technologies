import 'package:flutter/material.dart';
// import 'package:math_formattor/Screens/Home/home_screen.dart';
import 'package:math_formattor/constant.dart';
import 'package:flutter/widgets.dart';

void main() {
  runApp(new MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      home: new Scaffold(
        body: new Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[
            new MyStatefulWidget1(),
            new MyStatefulWidget2(),
          ],
        ),
      ),
    );
  }
}

class MyStatefulWidget1 extends StatefulWidget {
  State createState() => new MyStatefulWidget1State();
}

class MyStatefulWidget1State extends State<MyStatefulWidget1> {
  final titleController = TextEditingController();

  titleTextValue() {
    print("title text field: ${titleController.text}");
    return titleController.text;
  }

  @override
  Widget build(BuildContext context) {
    store.set("titleTextValue", titleTextValue);
    return TextField(controller: titleController);
  }
}

class MyStatefulWidget2 extends StatefulWidget {
  State createState() => new MyStatefulWidget2State();
}

class MyStatefulWidget2State extends State<MyStatefulWidget2> {
  String _text = 'PRESS ME';

  @override
  Widget build(BuildContext context) {
    var titleTextValue = store.get("titleTextValue");
    return new Center(
      child: new RaisedButton(
          child: new Text(_text),
          onPressed: () {
            print('title is ' + titleTextValue());
          }),
    );
  }
}

class GlobalState {
  final Map<dynamic, dynamic> _data = <dynamic, dynamic>{};

  static GlobalState instance = GlobalState._();
  GlobalState._();

  set(dynamic key, dynamic value) => _data[key] = value;
  get(dynamic key) => _data[key];
}

final GlobalState store = GlobalState.instance;