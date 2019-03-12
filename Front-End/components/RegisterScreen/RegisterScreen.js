import React, { Component } from "react";

import {
  AsyncStorage,
  Button,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
class RegisterScreen extends Component {
  state = {
    firstName: String,
    lasName: String,
    email: String,
    username: String,
    password: String,
    confirmPassword: String,
    dateOfBirth: String
  };

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

  handleChange = name => event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <ScrollView style={styles.scollContainer}>
        <KeyboardAvoidingView style={{ flex: 1 }}
          keyboardVerticalOffset={100} behavior={"position"}>
          <TextInput
            style={styles.textInput}
            placeholder="First Name"
            onChange={this.handleChange("firtName")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Last Name"
            onChange={this.handleChange("lastName")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email Address"
            onChange={this.handleChange("email")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Username"
            onChange={this.handleChange("username")}
          />

          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Password"
            onChange={this.handleChange("password")}
          />
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Confirm Password"
            onChange={this.handleChange("confirmPassword")}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Date of Birth (MM/DD/YY)"
            onChange={this.handleChange("dateOfBirth")}
          />
          <Button title="Register!" onPress={this._signInAsync} />
          </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  textInput: {
    marginBottom: 20,
    height: 40,
    fontSize: 20,
    borderColor: "white",
    borderBottomWidth: 1,
    marginTop: 5
  },
  scollContainer: {
    flex: 1,
    padding: 30,
    flexDirection: "column",
    backgroundColor: "mediumseagreen"
  }
});

export default RegisterScreen;
