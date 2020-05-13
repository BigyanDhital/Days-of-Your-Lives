import React, { useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";
import Text from "./components/Text";

const Result = ({ result }) => {
  const messageAnim = new Animated.Value(0);
  useEffect(() => {
    messageAnim.setValue(0);
    Animated.timing(messageAnim, {
      toValue: 1,
      duration: 600,
    }).start();
  }, [result.message]);

  const rotate = messageAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });
  const scale = messageAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });
  if (!result.isResultSet)
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
          {result.message}{" "}
        </Animated.Text>
      </View>
    );
  return (
    <View style={style.resultContainer}>
      <Text>Result</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  resultContainer: {},
});
export default Result;
