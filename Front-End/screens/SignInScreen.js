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
import { Users } from "../components/MockedDatabase";

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
  _signInAsync = async user => {
    const index = Users.indexOf(user).toString();
    await AsyncStorage.setItem("userLoggedIn", index);
    this.props.navigation.navigate("Main");
  };
  toRegisterScreen = () => {
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
      Users.find(user => user.username === this.state.usernameOrEmail) ||
      Users.find(user => user.email === this.state.usernameOrEmail);

    user
      ? user.password == this.state.password
        ? this._signInAsync(user)
        : this.setState({ error: true, errorMessage: "Incorrect credentials!" })
      : this.setState({ error: true, errorMessage: "Incorrect credentials!" });
  };

  login = () => {
    fetch('http://127.0.0.1:3000/').then(results => {
      console.log(results);
    }); 
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
          <Button title="Sign in" onPress={this.checkCredential} />
          <Button
            title="Sign up"
            onPress={this.toRegisterScreen}
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
