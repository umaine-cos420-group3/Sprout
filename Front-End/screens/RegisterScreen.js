import React, { Component } from "react";
import {
  AsyncStorage,
  Button,
  StyleSheet,
  ScrollView,
  TextInput
} from "react-native";
import { Base64 } from "js-base64";
import ErrorMessage from "../components/ErrorMessage";
import { getRandomQuestion, Users } from "../components/MockedDatabase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class RegisterScreen extends Component {
  state = {
    firstName: "",
    lasName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    error: false,
    errorMessage: ""
  };

  static navigationOptions = {
    title: "Please register"
  };

  //this function is a little different from the one in SignInScreen, because we can
  //assume the index of new user.
  _signInAsync = async index => {
    await AsyncStorage.setItem("userLoggedIn", index.toString());
    this.props.navigation.navigate("Main");
  };

  handleChange = name => event => {
    this.setState({ [name]: event.nativeEvent.text });
  };

  dismissError = () => {
    this.setState({ error: false });
  };

  checkUserInputs = () => {
    if (!this.state.email) {
      this.setState({ error: true, errorMessage: "Empty email address!" });
      return;
    }
    if (!this.state.username) {
      this.setState({ error: true, errorMessage: "Empty username!" });
      return;
    }
    if (!this.state.password) {
      this.setState({ error: true, errorMessage: "Empty password!" });
      return;
    }
    if (this.state.password != this.state.confirmPassword) {
      this.setState({ error: true, errorMessage: "Passwords not the same!" });
      return;
    } else {
      const userToAdd = {
        username: this.state.username,
        email: this.state.email,
        password: Base64.encode(this.state.password),
        firstName: this.state.firstName,
        lastName: this.state.lasName,
        iceBreakerIndex: 0
      };
      getRandomQuestion(userToAdd); //usage of the function in MockedDatabase
      Users.push(userToAdd);
      this._signInAsync(Users.length - 1);
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView style={styles.scollContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          onChange={this.handleChange("firstName")}
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
        <Button title="Register!" onPress={this.checkUserInputs} />
        <ErrorMessage
          visible={this.state.error}
          message={this.state.errorMessage}
          dismissError={this.dismissError}
        />
      </KeyboardAwareScrollView>
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
