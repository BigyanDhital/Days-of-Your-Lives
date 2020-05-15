import React, { useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { padZeroes } from "./helper";
import Text from "./components/Text";

const Result = ({ result }) => {
  const messageAnim = new Animated.Value(0);
  const resultAnim = new Animated.Value(0);
  useEffect(() => {
    messageAnim.setValue(0);
    Animated.timing(messageAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [result.message]);

  useEffect(() => {
    resultAnim.setValue(0);
    Animated.timing(resultAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [result.year || result.month || result.day]);

  const rotate = messageAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });
  const scale = messageAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  const opacity = resultAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 0.8, 1],
  });
  const translateY = resultAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-20, 0],
  });
  const rotateResult = resultAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });
  if (!result.resultSet)
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Animated.Text
          style={{
            fontWeight: "300",
            fontSize: 15,
            color: "#fff",
            opacity: messageAnim,
            transform: [{ scale }, { rotateX: rotate }],
          }}>
          {result.message}
        </Animated.Text>
      </View>
    );
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.youare}>YOU ARE</Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
        <View style={styles.resultSection}>
          <Animated.View style={[styles.resultSectionInner]}>
            <Animated.View
              style={{ opacity, transform: [{ rotateY: rotateResult }] }}>
              <Text style={styles.resultNumber}>{padZeroes(result.year)}</Text>
            </Animated.View>
            <Text style={styles.resultLabel}>Years</Text>
          </Animated.View>
        </View>
        <View style={styles.resultSection}>
          <Animated.View style={[styles.resultSectionInner]}>
            <Animated.View
              style={{ opacity, transform: [{ rotateY: rotateResult }] }}>
              <Text style={styles.resultNumber}>{padZeroes(result.month)}</Text>
            </Animated.View>
            <Text style={styles.resultLabel}>Months</Text>
          </Animated.View>
        </View>
        <View style={styles.resultSection}>
          <Animated.View style={[styles.resultSectionInner]}>
            <Animated.View
              style={{ opacity, transform: [{ rotateY: rotateResult }] }}>
              <Text style={styles.resultNumber}>{padZeroes(result.day)}</Text>
            </Animated.View>
            <Text style={styles.resultLabel}>Days</Text>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  resultContainer: { flex: 1, justifyContent: "center" },
  youare: {
    textAlign: "left",
    fontSize: 12,
    fontWeight: "600",
    color: "#ffffff99",
  },
  resultSection: {
    width: "50%",
    paddingTop: 15,
    position: "relative",
    paddingHorizontal: 10,
  },
  resultSectionInner: {
    width: "80%",
    paddingTop: 25,
    paddingBottom: 8,
    borderBottomWidth: 2,
    justifyContent: "flex-start",
    borderColor: "#ffffff90",
  },
  resultNumber: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 25,
    color: "	hsl(175, 71%, 90%)",
    // opacity: 0.8,
  },
  resultLabel: {
    position: "absolute",
    textAlign: "right",
    left: 2,
    bottom: 5,
    fontSize: 18,
    color: "#ffffff90",
  },
});
export default Result;
