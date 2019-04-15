import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Base64 } from "js-base64";
import { Button } from "../../node_modules/react-native-elements";

const styles = StyleSheet.create({
  container: {},
  textInput: {
    marginBottom: 20,
    height: 40,
    fontSize: 20,
    borderColor: "gray",
    borderBottomWidth: 1,
    marginTop: 5
  }
});

class SignIn extends Component {
  //these two functions work with the ones passed in from parent component
  //to save values to parent state
  handleUsernameInput = event => {
    this.props.onUsernameChange(event.nativeEvent.text);
  };

  handlePasswordInput = event => {
    this.props.onPasswordChange(Base64.encode(event.nativeEvent.text));
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <TextInput
            style={styles.textInput}
            placeholder="username or email"
            onChange={this.handleUsernameInput}
          />
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="password"
            onChange={this.handlePasswordInput}
          />
        </View>
      </>
    );
  }
}

export default SignIn;
