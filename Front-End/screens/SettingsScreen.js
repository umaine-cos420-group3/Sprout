import React from "react";
import { StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";
import { ExpoConfigView } from "@expo/samples";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "app.json"
  };
  _signOut = () => {
    this.props.navigation.navigate("Auth");
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView style={styles.scollContainer}>
        <ExpoConfigView />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this._signOut}
        >
          <Text style={styles.buttonText}>SIGN OUT</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scollContainer: {
    flex: 1,
    flexDirection: "column"
  },
  buttonContainer: {
    backgroundColor: "red",
    margin: 30,
    marginTop: 60,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 20,
    color: "white"
  }
});
