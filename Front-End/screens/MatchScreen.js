import React from "react";
import { AsyncStorage, ScrollView, StyleSheet, Text, View } from "react-native";
import IceBreaker from "../components/ProfileScreen/IceBreaker";
import LikeButton from "../components/MatchScreen/LikeButton";
import DislikeButton from "../components/MatchScreen/DislikeButton";
import { Users } from "../components/MockedDatabase";
import BioSection from "../components/ProfileScreen/BioSection";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 15
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 150
  }
});

export default class MatchScreen extends React.Component {
  state = {
    UserId: -1,
    OtherUsersIndex: 0,
    OtherUsers: [
      {
        firstName: "",
        lasName: "",
        iceBreaker: { question: "", answer1: "", answer2: "" },
        answerSelected: 0,
        bio: ""
      }
    ],
    noUsersLeft: false
  };

  static navigationOptions = {
    header: null
  };

  //componentDidMount is run before the component mounts. It makes sense to fetch
  //other users' information here
  componentDidMount = async () => {
    try {
      //find the logged-in user first, then create a copy of the user list so we don't
      //change the original one in the mocked database. Remove the current user from
      //the list, then save it to state.
      const idString = await AsyncStorage.getItem("userLoggedIn");
      if (idString) {
        this.setState({ UserId: parseInt(idString, 10) });
        const UsersDuplicate = Users.slice(0);
        UsersDuplicate.splice(parseInt(idString, 10), 1);
        const OtherUsers = UsersDuplicate;
        this.setState({
          OtherUsers
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleGoToNext = () => {
    if (this.state.OtherUsersIndex < this.state.OtherUsers.length - 1) {
      this.setState({
        OtherUsersIndex: this.state.OtherUsersIndex + 1
      });
    } else {
      this.setState({
        noUsersLeft: true
      });
    }
  };

  render() {
    const display = this.state.noUsersLeft ? (
      <View>
        <Text style={{ textAlign: "center" }}>
          Sorry, no one else is using Sprout :/
        </Text>
      </View>
    ) : (
      <>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <IceBreaker
            user={this.state.OtherUsers[this.state.OtherUsersIndex]}
            compareAnswers={true}
          />
          <BioSection
            user={this.state.OtherUsers[this.state.OtherUsersIndex]}
          />
        </ScrollView>
        <View style={styles.buttonsContainer}>
          <DislikeButton
            userId={this.state.UserId}
            goToNext={this.handleGoToNext}
          />
          <LikeButton
            userId={this.state.UserId}
            likedId={this.state.OtherUsers[this.state.OtherUsersIndex].id}
            goToNext={this.handleGoToNext}
          />
        </View>
      </>
    );

    return <View style={styles.container}>{display}</View>;
  }
}
