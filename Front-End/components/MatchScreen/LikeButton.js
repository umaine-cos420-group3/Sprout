import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Users } from "../MockedDatabase";
import ErrorMessage from "../ErrorMessage";

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
  state = {
    error: false,
    errorMessage: ""
  };

  handlePress = () => {
    Users[this.props.userId].liked.push(this.props.likedId);
    if (Users[this.props.likedId].liked.includes(this.props.userId)) {
      this.showError("It's a match!");
      Users[this.props.userId].matched.push(this.props.likedId);
      Users[this.props.likedId].matched.push(this.props.userId);
    } else {
      this.props.goToNext();
    }
  };

  //temporary way to alert user about matching
  showError = message => {
    this.setState({
      error: true,
      errorMessage: message
    });
  };

  dismissError = () => {
    this.setState({ error: false });
    this.props.goToNext();
  };

  render() {
    return (
      <>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.handlePress}
        >
          <Icon name="heart" type="font-awesome" color="white" size={50} />
        </TouchableOpacity>
        <ErrorMessage
          visible={this.state.error}
          message={this.state.errorMessage}
          dismissError={this.dismissError}
        />
      </>
    );
  }
}

export default LikeButton;
