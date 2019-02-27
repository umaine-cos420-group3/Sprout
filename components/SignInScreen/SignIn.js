import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";

class SignIn extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <TextInput style={styles.textInput} placeholder="username or email" />
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="password"
          />
        </View>
      </>
    );
  }
}

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

export default SignIn;
