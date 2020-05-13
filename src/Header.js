import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View styles={styles.headerContainer}>
      <Text style={styles.titleText}>Days of your lives</Text>
      <Text style={styles.subTitle}>Find out exactly how old you are</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 28,
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
  },
  subTitle: {
    fontSize: 16,
    marginTop: 5,
    color: "#ffffff90",
    textAlign: "center",
    fontWeight: "300",
  },
});

export default Header;
