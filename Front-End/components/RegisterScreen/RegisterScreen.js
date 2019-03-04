import React, { Component } from "react";

import {
  AsyncStorage,
  Button,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  
} from "react-native";

class RegisterScreen extends Component {
  static navigationOptions = {
    title: "Please sign in"
  };
  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Main");
  };
  _registerAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Reg");
  };

  render() {
    return (
      <ScrollView style={styles.scollContainer}>
        <View style={styles.container}>
          <TextInput style={styles.textInput} placeholder="First Name" />
          <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email Address"
            
          />
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            
          />

          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Password"
            
          />
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Confirm Password"
            
          />
          <TextInput
            style={styles.textInput}
            placeholder="Date of Birth (MM/DD/YY)"
            
          />
          <Button title="Register!" onPress={this._signInAsync} />
          
        
        </View>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        },
    textInput: {
        marginBottom: 20,
        height: 40,
        fontSize: 20,
        borderColor: "white",
        borderBottomWidth: 1,
        marginTop: 5,
    },
    scollContainer: {
        flex: 1,
        padding: 30,
        flexDirection: "column",
        backgroundColor: 'mediumseagreen'
      },
    });


export default RegisterScreen;