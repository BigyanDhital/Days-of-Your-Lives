import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Text from "./components/Text";
import DatePicker from "./components/DatePicker";
import Header from "./Header";
import Result from "./Result";
import LinearGradient from "react-native-linear-gradient";
import FeatherIcon from "react-native-vector-icons/Feather";
import moment from "moment";
import { months } from "./constants";
import { calculateDifference } from "./helper";
const date = new Date();

const App = () => {
  const [userDate, setUserDate] = useState({
    year: "",
    month: "",
    day: "",
  });
  const [today, setToday] = useState({
    year: date.getFullYear(),
    month: months[date.getMonth()],
    day: date.getDate(),
  });
  const [result, setResult] = useState({
    resultSet: false,
    message: "Start by entering your date of birth below",
    year: "",
    month: "",
    day: "",
  });

  const calculateAge = () => {
    let mToday = moment(today);
    let mUserDate = moment(userDate);
    if (!userDate.year || !userDate.month || !userDate.day) {
      setResult({
        ...result,
        message: "The date you selected looks incomplete",
      });
      return;
    }
    let difference = calculateDifference(userDate, today);
    console.log({ difference });
    setResult({
      ...difference.age,
      message: difference.message,
      resultSet: !difference.error,
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={["#21AD77", "#19968B"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.container}>
            <Header />
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
              <View style={styles.section}>
                <Result {...{ result }} />
              </View>
              <View style={styles.section}>
                <DatePicker
                  label="YOUR BIRTHDAY"
                  date={userDate}
                  onValueChange={date => {
                    console.log("Selected date user ", date);
                    setUserDate(date);
                  }}
                />
                <DatePicker
                  label="TODAY"
                  date={today}
                  onValueChange={date => {
                    console.log("Selected date today ", date);
                    setToday(date);
                  }}
                />

                {/* <View style={styles.inputContainer}>
                  <Text style={styles.dateSelectLabel}>TODAY</Text>
                  <View style={styles.inputDatesContainer}>
                    <Picker
                      style={styles.dropDown}
                      placeHolder="Year"
                      selectedValue={today.year}
                      options={years}
                      onValueChange={value =>
                        setToday({ ...today, year: value })
                      }
                    />

                    <Picker
                      style={styles.dropDown}
                      placeHolder="Month"
                      selectedValue={today.month}
                      onValueChange={value =>
                        setToday({ ...today, month: value })
                      }
                      options={months}
                    />

                    <Picker
                      style={styles.dropDown}
                      placeHolder="Day"
                      selectedValue={today.day}
                      options={today.dayOptions}
                      onValueChange={value =>
                        setToday({ ...today, day: value })
                      }
                    />
                  </View>
                </View>
                */}
                <View style={styles.calculateDifference}>
                  <TouchableOpacity
                    onPress={calculateAge}
                    style={styles.calculateButton}>
                    <Text style={styles.calculateButtonText}>CALCULATE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
            <View>
              <TouchableOpacity
                style={{ alignSelf: "center" }}
                onPress={() => null}>
                <FeatherIcon name="smile" color="#fff" size={17} />
              </TouchableOpacity>
              {/* <Text style={styles.message}>:)</Text> */}
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
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

export default App;
