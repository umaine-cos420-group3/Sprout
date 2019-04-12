import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import SignOutButton from "../components/ProfileScreen/SignOutButton";
import IceBreaker from "../components/ProfileScreen/IceBreaker";
import BioSection from "../components/ProfileScreen/BioSection";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
      <KeyboardAwareScrollView style={styles.scollContainer}>
        <View keyboardShouldPersistTaps={"always"}>
          <BioSection />
          <IceBreaker />
          <SignOutButton signOutFunction={this._signOut} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
