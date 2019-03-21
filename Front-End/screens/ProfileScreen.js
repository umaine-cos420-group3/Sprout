import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { ExpoConfigView } from "@expo/samples";
import SignOutButton from "../components/ProfileScreen/SignOutButton";
import IceBreaker from "../components/ProfileScreen/IceBreaker";

const styles = StyleSheet.create({
  scollContainer: {
    flex: 1,
    flexDirection: "column"
  }
});

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  _signOut = () => {
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <ScrollView style={styles.scollContainer}>
        <IceBreaker />
        <SignOutButton signOutFunction={this._signOut} />
      </ScrollView>
    );
  }
}
