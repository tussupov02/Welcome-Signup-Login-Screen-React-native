import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Pressable,
  } from "react-native";
  import React, { useState } from "react";
  import COLORS from "../constants/colors";
  import { Ionicons } from "@expo/vector-icons";
  import Checkbox from "expo-checkbox";
  import Button from "../components/Button";
  
  const LoginScreens = ({navigation}) => {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.content}>
          <View style={styles.contentVertical}>
            <Text style={styles.create}>Hey Welcome back !</Text>
            <Text style={styles.connect}>Hello again you have been missed!</Text>
          </View>
          <View style={styles.emailBox}>
            <Text style={styles.emailText}>Email address</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                placeholder="Enter your email address"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
              />
            </View>
          </View>
          <View>
            <View style={styles.emailBox}>
              <Text style={styles.emailText}>Password</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor={COLORS.black}
                  secureTextEntry={isPasswordShow}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordShow(!isPasswordShow)}
                  style={styles.touchable}
                >
                  {isPasswordShow == true ? (
                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                  ) : (
                    <Ionicons name="eye" size={24} color={COLORS.black} />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.agreeBox}>
              <Checkbox
                style={styles.check}
                value={isChecked}
                onValueChange={setIsChecked}
                color={isChecked ? COLORS.primary : undefined}
              />
              <Text>Remenber Me</Text>
            </View>
            <Button title="Login" filled style={styles.button} />
            <View style={styles.signUpBox}>
              <View style={styles.signUp} />
              <Text style={styles.signUpText}>Or Login with</Text>
              <View style={styles.signUp} />
            </View>
            <View style={styles.imageBox}>
              <TouchableOpacity
                onPress={() => console.log("Pressed")}
                style={styles.imageTouch}
              >
                <Image
                  source={require("../assets/facebook.png")}
                  style={styles.facebook}
                />
                <Text>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => console.log("Pressed")}
                style={styles.imageTouch}
              >
                <Image
                  source={require("../assets/google.png")}
                  style={styles.google}
                />
                <Text>Google</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.haveAcc}>
              <Text style={styles.haveAccText}>Don't have an account ?</Text>
              <Pressable onPress={()=>navigation.navigate('Signup')}>
                      <Text style={styles.haveAccNav}>
                          Register
                      </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  export default LoginScreens;
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
    content: {
      flex: 1,
      marginHorizontal: 22,
    },
    create: {
      fontSize: 22,
      fontWeight: "bold",
      marginVertical: 12,
      color: COLORS.black,
    },
    contentVertical: {
      marginVertical: 22,
    },
    connect: {
      fontSize: 16,
      color: COLORS.black,
    },
    emailBox: {
      marginBottom: 12,
    },
    emailText: {
      fontSize: 16,
      fontWeight: "400",
      marginVertical: 8,
    },
    inputBox: {
      width: "100%",
      height: 48,
      borderColor: COLORS.black,
      borderWidth: 1,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 22,
    },
    input: {
      width: "100%",
    },
    inputNumberBox: {
      width: "100%",
      height: 48,
      borderColor: COLORS.black,
      borderWidth: 1,
      borderRadius: 8,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: 22,
    },
    inputNumber: {
      width: "12%",
      borderRightWidth: 1,
      borderLeftColor: COLORS.grey,
      height: "100%",
    },
    phone: {
      width: "80%",
    },
    touchable: {
      position: "absolute",
      right: 12,
    },
    agreeBox: {
      flexDirection: "row",
      marginVertical: 6,
    },
    check: {
      marginRight: 8,
    },
    button: {
      marginTop: 18,
      marginBottom: 4,
    },
    signUpBox: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 20,
    },
    signUp: {
      flex: 1,
      height: 1,
      backgroundColor: COLORS.grey,
      marginHorizontal: 10,
    },
    signUpText: {
      fontSize: 14,
    },
    imageBox: {
      flexDirection: "row",
      justifyContent: "center",
    },
    imageTouch: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      height: 52,
      borderWidth: 1,
      borderColor: COLORS.grey,
      marginRight: 4,
      borderRadius: 10,
    },
    facebook: {
      width: 36,
      height: 36,
      marginRight: 8,
    },
    google:{
      width: 36,
      height: 36,
      marginRight: 8,
    },
    haveAcc:{
      flexDirection:'row',
      justifyContent:'center',
      marginVertical: 22,
    },
    haveAccText:{
      fontSize:16,
      color: COLORS.black
    },
    haveAccNav:{
      fontSize:16,
      color:COLORS.primary,
      fontWeight:'bold',
      marginLeft: 6
    }
  });
  