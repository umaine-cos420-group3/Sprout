import React, { Component } from "react";
import {
  AsyncStorage,
  Button,
  StyleSheet,
  ScrollView,
  View
} from "react-native";
import Signin from "../components/SignInScreen/SignIn";

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
      <ScrollView style={styles.scollContainer}>
        <Signin />
        <View style={styles.buttonContainer}>
          <Button title="Sign in!" onPress={this._signInAsync} />
        </View>
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
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SignInScreen;
