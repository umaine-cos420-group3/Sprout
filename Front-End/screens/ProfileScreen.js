import React from "react";
import { AsyncStorage, StyleSheet, ScrollView, View } from "react-native";
import SignOutButton from "../components/ProfileScreen/SignOutButton";
import IceBreaker from "../components/ProfileScreen/IceBreaker";
import BioSection from "../components/ProfileScreen/BioSection";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Users } from "../components/MockedDatabase";

const styles = StyleSheet.create({
  scollContainer: {
    flex: 1,
    flexDirection: "column"
  }
});

export default class ProfileScreen extends React.Component {
  state = {
    iceBreaker: { question: "", answer1: "", answer2: "" }
  };

  static navigationOptions = {
    header: null
  };

  _signOut = () => {
    this.props.navigation.navigate("Auth");
  };

  componentDidMount = async () => {
    try {
      const indexString = await AsyncStorage.getItem("userLoggedIn");
      if (indexString) {
        this.setState({
          iceBreaker: Users[parseInt(indexString, 10)].iceBreaker
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView style={styles.scollContainer}>
        <View keyboardShouldPersistTaps={"always"}>
          <BioSection />
          <IceBreaker iceBreaker={this.state.iceBreaker} />
          <SignOutButton signOutFunction={this._signOut} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
