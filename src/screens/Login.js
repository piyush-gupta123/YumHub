import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import COLORS from "../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";

export default function Login({ navigation }) {
  const handleLogin = async(req)=>{
    const fetchResults = await axios.post(`http://localhost:5000/user/login`,{
      email: req.email,
      password: req.password
    })
    console.log("fetch results",fetchResults)
    navigation.navigate("HomeScreen")
  }
  return (
    <SafeAreaView>
      <View style={Styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        {/* <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text> */}
      </View>
      <View style={Styles.headview}>
        <Text style={Styles.heading}>LOGIN</Text>
      </View>
      <Text style={Styles.text}>UserName : </Text>
      <TextInput style={Styles.textInput} placeholder="Username" />
      <Text style={Styles.text}>Password : </Text>
      <TextInput
        style={Styles.textInput}
        secureTextEntry={true}
        placeholder="Password"
      />
      <TouchableOpacity onPress={handleLogin}>
        <View style={Styles.btnview}>
          <Text style={Styles.btnText}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <View style={Styles.btnview}>
          <Text style={Styles.btnText}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    color: COLORS.white,
    fontWeight: "800",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: COLORS.primary,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  headview: {
    backgroundColor: COLORS.primary,
    padding: 10,
    marginBottom: 25,
    borderRadius: 50,
    width: "80%",
    alignSelf: "center",
    marginTop: 20,
  },
  textInput: {
    height: 40,
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    alignSelf: "center",
    marginBottom: 20,
  },
  btnview: {
    backgroundColor: COLORS.primary,
    width: "40%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.white,
  },
});
