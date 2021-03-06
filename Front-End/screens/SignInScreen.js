import React, { Component } from "react";
import {
  AsyncStorage,
  Button,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from "react-native";
import SignIn from "../components/SignInScreen/SignIn";
import ErrorMessage from "../components/ErrorMessage";
import { Users } from "../components/MockedDatabase";

const styles = StyleSheet.create({
  scollContainer: {
    flex: 1,
    padding: 30,
    flexDirection: "column"
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column"
  },
  textContainer: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20
  }
});

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
    title: "Sprout App"
  };

  _signInAsync = async user => {
    //find user in the array of users (should be fetched from database).
    //Note that index is type string, because AsyncStorage.setItem only
    //accepts strings. It stores the information of current user so we
    //can fetch it anywhere in the app.
    const id = Users[Users.indexOf(user)].id.toString();
    await AsyncStorage.setItem("userLoggedIn", id);
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
    fetch("").then(results => {
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
        <Text style={styles.textContainer}> 
          Please login to continue
        </Text>
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

export default SignInScreen;
