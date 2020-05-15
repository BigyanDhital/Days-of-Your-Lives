import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import Text from "../Text";
import FeatherIcon from "react-native-vector-icons/Feather";
import PickerModal from "./PickerModal";
const Picker = props => {
  console.log({ props });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <TouchableOpacity
      style={[
        props.style,
        {
          position: "relative",
          alignItems: "flex-start",
          flexDirection: "row",
        },
      ]}
      onPress={() => setIsOpen(!isOpen)}>
      <Text style={{ flex: 1, paddingHorizontal: 5, textAlign: "center" }}>
        {props.selectedValue || props.placeHolder}
      </Text>
      <FeatherIcon name="chevron-down" color="#ffffff90" size={16} />

      <PickerModal
        visible={isOpen}
        title={props.placeHolder}
        selectedValue={props.selectedValue}
        close={() => setIsOpen(false)}
        options={props.options}
        onValueChange={props.onValueChange}
      />
    </TouchableOpacity>
  );
};

Picker.defaultProps = {
  options: [],
  placeHolder: "Select",
  onValueChange: () => null,
  optionsContainerStyle: {
    padding: 10,
  },
  optionStyle: {
    paddingVertical: 8,
    // borderBottomWidth: 1,
    borderColor: "#ffffff10",
  },
  optionTextStyle: { fontSize: 16, color: "#fff" },
};
export default Picker;
