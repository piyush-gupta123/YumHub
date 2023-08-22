import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../consts/colors";
import { SliderBox } from "react-native-image-slider-box";

const images = [
  require("../../assets/Boarding_Images/startingImage.png"),
  require("../../assets/Boarding_Images/image2.jpg"),
  require("../../assets/Boarding_Images/image3.png"),
  require("../../assets/Boarding_Images/image4.png"),
  require("../../assets/Boarding_Images/image5.jpg"),
];

export default function Onboard({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <View style={{height: "80%", justifyContent: "center", alignItems: "center"}}>
        <SliderBox
          images={images}
          sliderBoxHeight={50}
          dotColor={COLORS.primary}
          inactiveDotColor="grey"
          autoplay
          circleLoop
          paginationBoxVerticalPadding={30}
          ImageComponentStyle={{
            height: 400,
            width: 400,
            borderRadius: 50,
            marginTop: 60,
          }}
        />
        <TouchableOpacity
          style={{ marginTop: 20, width: "100%" }}
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
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  button: {
    // backgroundColor: "#007FFF",
    backgroundColor: COLORS.primary,
    padding: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
