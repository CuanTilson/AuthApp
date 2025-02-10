import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App"; // Import navigation types
import { Ionicons } from "@expo/vector-icons";

type SignupScreenProp = StackNavigationProp<RootStackParamList, "Signup">;

const SignupView = () => {
  const navigation = useNavigation<SignupScreenProp>();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 10 }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerTitle: "",
      headerStyle: {
        backgroundColor: "#fff", // Ensure the header background color matches the screen background
      },
      headerTintColor: "black", // Set the color of the back arrow
    });
  }, [navigation]);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <View style={styles.inputContainer}>
        <Icon name="person" size={24} color="black" style={styles.iconInside} />
        <TextInput
          style={[styles.inputWithIcon, { paddingLeft: 40 }]}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="email" size={20} style={styles.iconInside} />
        <TextInput
          style={[styles.inputWithIcon, { paddingLeft: 40 }]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} style={styles.iconInside} />
        <TextInput
          style={[styles.inputWithIcon, { paddingLeft: 40 }]}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} style={styles.iconInside} />
        <TextInput
          style={[styles.inputWithIcon, { paddingLeft: 40 }]}
          placeholder="Confirm Password"
          secureTextEntry
          value={password}
          onChangeText={setConfirmPassword}
        />
      </View>
      <View style={styles.inputContainer}></View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Signup")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.footerText}>
            <Text style={styles.footerTextGrey}>Already have an account? </Text>
            <Text style={styles.footerTextOrange}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 50,
    alignSelf: "flex-start",
    marginLeft: "10%",
  },

  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  inputWithIcon: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  iconInside: { position: "absolute", left: 10 },

  button: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 18 },

  footerContainer: { marginTop: 20 },
  footerText: { color: "#666", fontSize: 16 },
  footerTextGrey: { color: "#666" },
  footerTextOrange: { color: "#FFA500" },

  linkText: { marginTop: 15, color: "#FFA500" },
});

export default SignupView;
