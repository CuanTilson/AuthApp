import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App"; // Import navigation types

type LoginScreenProp = StackNavigationProp<RootStackParamList, "Login">;

const LoginView = () => {
  const navigation = useNavigation<LoginScreenProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Please sign in to continue</Text>

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
      
      <TouchableOpacity style={styles.button} onPress={() => console.log('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.footerText}>
            <Text style={styles.footerTextGrey}>Don't have an account? </Text>
            <Text style={styles.footerTextOrange}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 5, alignSelf: 'flex-start', marginLeft: '10%' },
  subtitle: { fontSize: 16, color: '#666', marginBottom: 20, alignSelf: 'flex-start', marginLeft: '10%' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  inputWithIcon: { width: '80%', height: 50, borderWidth: 1, borderRadius: 10, paddingHorizontal: 10 },
  iconInside: { position: 'absolute', left: 10 },
  button: { backgroundColor: '#FFA500', padding: 15, borderRadius: 10, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18 },
  linkText: { marginTop: 15, color: '#FFA500' },
  footerContainer: { marginTop: 20 },
  footerText: { color: '#666' },
  footerTextGrey: { color: '#666' },
  footerTextOrange: { color: '#FFA500' },
});

export default LoginView;
