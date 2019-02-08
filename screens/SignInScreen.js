import React, { Component } from "react";
import { AsyncStorage, Button, StyleSheet, View } from "react-native";

class SignInScreen extends Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Main");
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SignInScreen;
