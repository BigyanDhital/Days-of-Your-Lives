import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Picker from "./Picker";
import Text from "./Text";
import moment from "moment";
import { months } from "../constants";
const years = [];
const dateToday = new Date();
for (let i = 0; i < 100; i++) {
  years.push(dateToday.getFullYear() - i);
}
const DatePicker = props => {
  const [date, setDate] = useState(
    props.date || {
      year: "",
      month: "",
      day: "",
      dayOptions: [],
    },
  );

  useEffect(() => {
    console.log("Effect ", props);
    let dayOptions = date.dayOptions || [];
    dayOptions = [];
    let daysInMonth = moment(`${date.year}-${date.month}`).daysInMonth();

    console.log({ daysInMonth });
    for (let i = 1; i <= daysInMonth; i++) dayOptions.push(i);
    console.log("setting ", { ...date, dayOptions });
    setDate({ ...date, dayOptions });
  }, [date.year || date.month]);

  const handleDateChange = (name, value) => {
    setDate({ ...date, [name]: value });
    props.onValueChange({ ...date, [name]: value });
  };
  const resetToday = () => {
    let today = new Date();
    let data = {
      year: today.getFullYear().toString(),
      month: today.getMonth().toString(),
      day: today.getDate().toString(),
    };
    props.onValueChange({ data });
  };

  return (
    <View style={styles.inputContainer}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.dateSelectLabel}>{props.label}</Text>
        {/* <TouchableOpacity onPress={resetToday}>
          <Text style={styles.dateSelectLabel}>RESET</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.inputDatesContainer}>
        <Picker
          style={styles.dropDown}
          placeHolder="Year"
          selectedValue={props.date.year}
          options={years}
          onValueChange={value => handleDateChange("year", value)}
        />

        <Picker
          style={styles.dropDown}
          placeHolder="Month"
          selectedValue={props.date.month}
          onValueChange={value => handleDateChange("month", value)}
          options={months}
        />

        <Picker
          style={styles.dropDown}
          placeHolder="Day"
          selectedValue={props.date.day}
          options={date.dayOptions || []}
          onValueChange={value => handleDateChange("day", value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  section: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: "center",
    // alignItems: 'center',
  },
  inputContainer: {
    marginTop: 12,
  },
  inputDatesContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateSelectLabel: {
    textTransform: "uppercase",
    textAlign: "left",
    fontSize: 12,
    fontWeight: "600",
    color: "#ffffff99",
  },
  dropDown: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "#ffffff20",
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#ffffff50",
  },
  calculateButton: {
    padding: 10,
    marginTop: 30,
    borderColor: "#ffffff99",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 5,
  },
  calculateButtonText: {
    color: "#21AD77",
    fontWeight: "bold",
  },
  message: { fontSize: 18 },
});

export default DatePicker;
