import React from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FeatherIcon from "react-native-vector-icons/Feather";
const PickerModal = props => {
  return (
    <Modal
      transparent={true}
      visible={props.visible}
      animated={true}
      onDismiss={() => props.close()}
      onRequestClose={() => props.close()}
      animationType="slide">
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      <View style={{ backgroundColor: "#00000020", top: 0 }}>
        <TouchableOpacity style={{ flex: 1 }} onPress={props.close} />
      </View>
      <View style={{ flex: 1, top: "60%", bottom: "10%" }}>
        <LinearGradient
          colors={["#19968B", "#21AD77"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.modalTitleText}>{props.title}</Text>
            <TouchableOpacity onPress={() => props.close()}>
              <FeatherIcon name="x" color="#fff" size={18} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalBody}>
            {/* <FlatList
              style={{ flex: 1, marginBottom: 100 }}
              data={props.options}
              keyExtractor={item => item.toString()}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={{
                      paddingVertical: 8,
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "#ffffff10",
                    }}
                    onPress={() => {
                      props.onValueChange(item);
                      props.close();
                    }}>
                    <Text style={{ fontSize: 16, color: "#fff" }}>{item}</Text>
                  </TouchableOpacity>
                );
              }}
            /> */}

            {/* <SafeAreaView style={{ borderWidth: 0, borderColor: "red" }}> */}
            <ScrollView style={{ flex: 1, padding: 10, paddingBottom: 100 }}>
              <View style={{ flex: 1, paddingBottom: 100 }}>
                {props.options.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={item.value || item}
                      style={{
                        paddingVertical: 8,
                        justifyContent: "center",
                        alignItems: "center",
                        borderColor: "#ffffff10",
                      }}
                      onPress={() => {
                        props.onValueChange(item);
                        props.close();
                      }}>
                      <Text style={{ fontSize: 16, color: "#fff" }}>
                        {item.label || item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
            {/* </SafeAreaView> */}
          </View>
        </LinearGradient>
      </View>
      {/* </SafeAreaView> */}
    </Modal>
  );
};
const styles = StyleSheet.create({
  titleContainer: {
    borderTopWidth: 1,
    borderColor: "#ffffff20",
    padding: 10,
    backgroundColor: "#ffffff08",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalTitleText: { color: "#fff", fontSize: 17 },
  modalBody: { flex: 1 },
});

export default PickerModal;
