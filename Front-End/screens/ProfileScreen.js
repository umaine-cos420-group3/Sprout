import React from "react";
import { KeyboardAvoidingView, StyleSheet, ScrollView } from "react-native";
import SignOutButton from "../components/ProfileScreen/SignOutButton";
import IceBreaker from "../components/ProfileScreen/IceBreaker";
import BioSection from "../components/ProfileScreen/BioSection";

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
      <ScrollView
        style={styles.scollContainer}
        keyboardShouldPersistTaps={"always"}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          keyboardVerticalOffset={100}
          behavior={"position"}
        >
          <BioSection />
          <IceBreaker />
        </KeyboardAvoidingView>
        <SignOutButton signOutFunction={this._signOut} />
      </ScrollView>
    );
  }
}
