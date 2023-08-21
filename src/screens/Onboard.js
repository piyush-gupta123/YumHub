import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../consts/colors";
import startingImage from "../../assets/startingImage.png";

export default function Onboard({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <Image source={startingImage} style={{ width: 300, height: 300 }} />
      <TouchableOpacity
        style={{ marginTop: 20, width: "80%" }}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <View style={style.button}>
            <Text
              style={{ color: COLORS.white, fontSize: 20, fontWeight: 700 }}
            >
              Get Started
            </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#007FFF",
    padding: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
