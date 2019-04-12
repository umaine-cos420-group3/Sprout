import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Button,
  View
} from "react-native";
import { WebBrowser } from "expo";
import { MonoText } from "../components/StyledText";
import IceBreaker from "../components/ProfileScreen/IceBreaker";
import LikeButton from "../components/MatchScreen/LikeButton";
import DislikeButton from "../components/MatchScreen/DislikeButton";

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
    height: 150,
  }
});


export default class MatchScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <IceBreaker /> 
        </ScrollView>
        <View style={styles.buttonsContainer}>
          <DislikeButton />
          <LikeButton />        
        </View>
      </View>
    );
  }
}
