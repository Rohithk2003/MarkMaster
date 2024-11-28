// Automatic FlutterFlow imports
import '/backend/backend.dart';
import '/backend/schema/structs/index.dart';
import '/backend/schema/enums/enums.dart';
import '/flutter_flow/flutter_flow_theme.dart';
import '/flutter_flow/flutter_flow_util.dart';
import '/custom_code/actions/index.dart'; // Imports other custom actions
import '/flutter_flow/custom_functions.dart'; // Imports custom functions
import 'package:flutter/material.dart';
// Begin custom action code
// DO NOT REMOVE OR MODIFY THE CODE ABOVE!

import 'dart:ffi';

import 'dart:async';
import 'package:cloud_firestore/cloud_firestore.dart';
import '/auth/firebase_auth/auth_util.dart';

Future<bool> checkIfHostelBooked(
  double? duration,
  DateTime? startingDate,
  String? hostelId,
) async {
  // Add your function code here!
  if (duration == null || startingDate == null || hostelId == null) {
    print("Null values in param");
    return false;
  }

  // Convert startingDate to a date-only format
  DateTime c =
      DateTime(startingDate.year, startingDate.month, startingDate.day);

  // Calculate the end date by adding the duration (in months) to the starting date and converting to date-only
  int endMonth = c.month + duration.toInt();
  int endYear = c.year + (endMonth - 1) ~/ 12;
  endMonth = (endMonth - 1) % 12 + 1;

  DateTime d = DateTime(endYear, endMonth, c.day);
  print('Start Date (Date Only): $c');
  print('End Date (Date Only): $d');

  QuerySnapshot bookingsSnapshot = await FirebaseFirestore.instance
      .collection('order')
      .where('hostelId', isEqualTo: hostelId)
      .get();

  bool isAvailable = true;

  for (var doc in bookingsSnapshot.docs) {
    DateTime bookedStartDate = (doc['startingDate'] as Timestamp).toDate();
    int bookedDuration = (doc['duration'] as double).toInt();
    DateTime bookedEndDate = DateTime(
      bookedStartDate.year,
      bookedStartDate.month + bookedDuration,
      bookedStartDate.day,
    );

    DateTime a = DateTime(
        bookedStartDate.year, bookedStartDate.month, bookedStartDate.day);
    DateTime b =
        DateTime(bookedEndDate.year, bookedEndDate.month, bookedEndDate.day);
    print(a);
    print(b);
    if ((c.isAfter(a) && c.isBefore(b)) ||
        (c.isBefore(a) && d.isAfter(a) && d.isBefore(b)) ||
        (c.isBefore(a) && d.isAfter(b)) ||
        (c.isBefore(a) && d.isAfter(b))) {
      bool f1 = (c.isAfter(a) && c.isBefore(b));
      bool f2 = (c.isBefore(a) && d.isAfter(a) && d.isBefore(b));
      bool f3 = (c.isBefore(a) && d.isAfter(b));
      bool f4 = (c.isBefore(a) && d.isAfter(b));
      print('1,$f1');
      print('2,$f2');
      print('3,$f3');
      print('4,$f4');
      print('Hostel is already booked within the given date range.');
      isAvailable = false;
      break;
    }
  }

  if (isAvailable) {
    print('Hostel is available for booking.');
    return true;
  } else {
    return false;
  }
}