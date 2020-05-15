import React, { useEffect } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Animated,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import FeatherIcon from "react-native-vector-icons/Feather";
const PickerModal = props => {
  const opacity = new Animated.Value(0);
  useEffect(() => {
    animateBackdrop(props.visible);
  }, [props.visible]);

  const animateBackdrop = toValue => {
    Animated.timing(opacity, {
      toValue: toValue ? 1 : 0,
      duration: 200,
      delay: toValue ? 200 : 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Modal
      transparent={true}
      visible={props.visible}
      animated={true}
      onDismiss={() => props.close()}
      onRequestClose={() => props.close()}
      animationType="slide">
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{ flex: 4, backgroundColor: "#00000050", opacity }}>
          <TouchableOpacity onPress={() => props.close()} style={{ flex: 1 }} />
        </Animated.View>

        <View style={{ flex: 3 }}>
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
              <SafeAreaView
                style={{ flex: 1, borderWidth: 0, borderColor: "red" }}>
                <FlatList
                  style={{ flex: 1 }}
                  data={props.options}
                  keyExtractor={item => item.toString()}
                  renderItem={({ item }) => {
                    const isSelected = props.selectedValue === item;
                    return (
                      <TouchableOpacity
                        style={[
                          {
                            paddingVertical: 8,
                            justifyContent: "center",
                            alignItems: "center",
                            borderColor: "#ffffff10",
                            flexDirection: "row",
                          },
                          isSelected && {
                            borderTopWidth: 1,
                            borderBottomWidth: 1,
                            borderColor: "#ffffff70",
                          },
                        ]}
                        onPress={() => {
                          props.onValueChange(item);
                          props.close();
                        }}>
                        <Text style={[{ fontSize: 16, color: "#fff" }]}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </SafeAreaView>
            </View>
          </LinearGradient>
        </View>
      </View>
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
