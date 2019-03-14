import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { ExpoConfigView } from "@expo/samples";
import SignOutButton from "../components/ProfileScreen/SignOutButton";

const styles = StyleSheet.create({
  scollContainer: {
    flex: 1,
    flexDirection: "column"
  }
});

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
        <SignOutButton signOutFunction={this._signOut} />
      </ScrollView>
    );
  }
}
