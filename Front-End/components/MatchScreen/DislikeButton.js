import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#f9524d",
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
    this.props.goToNext();
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={this.handlePress}
      >
        <Icon name="times" type="font-awesome" color="white" size={50} />
      </TouchableOpacity>
    );
  }
}

export default LikeButton;
