import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Users } from "../MockedDatabase";

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "lightgreen",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 40
  },
  buttonText: {
    fontSize: 35,
    color: "black"
  }
});

class LikeButton extends Component {
  handlePress = () => {
    Users[this.props.userId].liked.push(this.props.likedIndex);
    this.props.goToNext();
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={this.handlePress}
      >
        <Icon name="heart" type="font-awesome" color="white" size={50} />
      </TouchableOpacity>
    );
  }
}

export default LikeButton;
