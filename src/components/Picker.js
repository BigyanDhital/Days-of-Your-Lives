import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import Text from "./Text";
import FeatherIcon from "react-native-vector-icons/Feather";
const Picker = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <View style={[props.style, {position: 'relative'}]}>
    <TouchableOpacity
      style={[
        props.style,
        {
          position: "relative",
          //   justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "row",
        },
      ]}
      onPress={() => setIsOpen(!isOpen)}>
      <Text style={{ flex: 1, paddingHorizontal: 5, textAlign: "center" }}>
        {props.selectedValue || props.placeHolder}
      </Text>
      <FeatherIcon name="chevron-down" color="#ffffff90" size={16} />

      {isOpen && (
        <ScrollView
          style={[
            { position: "absolute", top: "200%", zIndex: 3 },
            props.optionsContainerStyle,
          ]}>
          {props.options.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.value || item}
                style={[props.optionStyle]}
                onPress={() => {
                  props.onValueChange(item);
                  setIsOpen(false);
                }}>
                <Text style={props.optionTextStyle}>{item.label || item}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
      {isOpen && (
        <View
          style={{
            zIndex: 2,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#ff000020",
          }}
        />
      )}
    </TouchableOpacity>

    // </View>
  );
};

Picker.defaultProps = {
  options: [],
  placeHolder: "Select",
  onValueChange: () => null,
  optionsContainerStyle: {
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#21AD77",
  },
  optionStyle: { paddingVertical: 3, width: "100%" },
  optionTextStyle: { fontSize: 15, color: "#fff" },
};
export default Picker;
