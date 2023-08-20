import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../consts/colors";

const DetailsCard = ({ navigation, route }) => {
  const item = route.params;

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
          }}
        >
          <Image source={item.image} style={{ height: 250, width: 250 }} />
        </View>
        <View style={style.details}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: COLORS.white }}
            >
              {item.name}
            </Text>
          </View>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", color: COLORS.white }}
          >
            Ingredients : {item.ingredients}
          </Text>
          <Text style={style.detailsText}>{item.desc}</Text>
          <View style={style.rating}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: COLORS.yellow }}>
              Rating : {item.rating}
            </Text>
            <Icon
              name="star"
              size={29}
              style={{ color: "white", marginLeft: 2 }}
            />
          </View>
          <View style={style.price}>
            <Text style={{fontSize: 20,fontWeight: "500", color: COLORS.black}}>PRICE : {item.price}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
  rating: {
    flexDirection: "row",
    marginTop: 10,
  },
  price: {
    backgroundColor: COLORS.yellow,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,

  }
});

export default DetailsCard;
