import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Login = () => {
    return (
        <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>

      <View style={styles.inputContainer}>
        <Entypo name="user" size={24} color="black" />
        <TextInput placeholder='Name' style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={24} color="black" />
        <TextInput placeholder='Password' style={styles.input} />
        <Ionicons name="eye" size={24} color="black" />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </View>

        <View style={styles.createAccountButton}>
          <Text style={styles.createAccountButtonText}>CREATE ACCOUNT</Text>
        </View>
      </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F4F4F4',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 40,
      marginBottom: 30,
      color: '#333',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'white',
      backgroundColor: '#F5F5F5',
      width: 330,
      height: 60,
      borderRadius: 10,
      marginBottom: 20,
      paddingLeft: 10,
    },
    input: {
      fontSize: 20,
      marginLeft: 10,
      width: 270,
      color: '#333',
    },
    buttonContainer: {
      width: 330,
    },
    loginButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#333',
      height: 60,
      borderRadius: 10,
      marginBottom: 20,
    },
    loginButtonText: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 24,
    },
    createAccountButton: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#333',
    },
    createAccountButtonText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: '#333',
    },
  });
export default Login
