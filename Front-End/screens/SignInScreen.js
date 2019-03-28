import React, { Component } from "react";
import {
  AsyncStorage,
  Button,
  StyleSheet,
  ScrollView,
  View
} from "react-native";
import SignIn from "../components/SignInScreen/SignIn";
import ErrorMessage from "../components/ErrorMessage";
import { UserCredentials } from "../components/UserCredentials";

class SignInScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameOrEmail: "",
      password: "",
      error: false,
      errorMessage: ""
    };
  }

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

  saveUsername = value => {
    this.setState({ usernameOrEmail: value });
  };

  savePassword = value => {
    this.setState({ password: value });
  };

  checkCredential = () => {
    let user =
      UserCredentials.find(
        user => user.username === this.state.usernameOrEmail
      ) ||
      UserCredentials.find(user => user.email === this.state.usernameOrEmail);

    user
      ? user.password == this.state.password
        ? this._signInAsync()
        : this.setState({ error: true, errorMessage: "Incorrect credentials!" })
      : this.setState({ error: true, errorMessage: "Incorrect credentials!" });
  };

  dismissError = () => {
    this.setState({ error: false });
  };

  render() {
    return (
      <ScrollView
        style={styles.scollContainer}
        keyboardShouldPersistTaps={"always"}
      >
        <SignIn
          onUsernameChange={this.saveUsername}
          onPasswordChange={this.savePassword}
        />
        <View style={styles.buttonContainer}>
          <Button title="Sign in!" onPress={this.checkCredential} />
          <Button
            title="Sign up!"
            onPress={this._registerAsync}
            color="#4CAF50"
          />
        </View>
        <ErrorMessage
          visible={this.state.error}
          dismissError={this.dismissError}
          message={this.state.errorMessage}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scollContainer: {
    flex: 1,
    padding: 30,
    flexDirection: "column"
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column"
  }
});

export default SignInScreen;
