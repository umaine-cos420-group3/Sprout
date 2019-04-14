import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Button, Card } from "react-native-paper";
import { scaledSize } from "../ScaledSize";
import ErrorMessage from "../ErrorMessage";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  editButton: {},
  editButtonContainer: {
    alignItems: "flex-end"
  },
  cardContainer: {
    height: height * 0.3,
    width: width * 0.86,
    backgroundColor: "lightgreen",
    display: "flex",
    flexDirection: "column"
  },
  container: {
    marginHorizontal: width * 0.07,
    marginVertical: height * 0.05
  },
  questionContainer: {
    flexGrow: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
    maxHeight: height * 0.3 * 0.75
  },
  question: {
    paddingHorizontal: width * 0.01,
    textAlign: "center",
    fontSize: scaledSize(22)
  },
  answerContainer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch"
  },
  touchableSelected: {
    width: width * 0.43,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 0.5,
    backgroundColor: "limegreen"
  },
  touchableNotSelected: {
    width: width * 0.43,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 0.5,
    backgroundColor: "lightgreen"
  },
  answerText: {
    fontSize: scaledSize(22)
  }
});

class IceBreaker extends Component {
  state = {
    editing: false,
    answer1Selected: false,
    answer2Selected: false,
    error: false,
    errorMessage: ""
  };

  highlightButton1 = () => {
    this.setState({ answer1Selected: true, answer2Selected: false });
  };

  highlightButton2 = () => {
    this.setState({ answer2Selected: true, answer1Selected: false });
  };

  handleEditButton = () => {
    const editing = this.state.editing;
    this.props.iceBreaker.question
      ? this.props.iceBreaker.answer1 && this.props.iceBreaker.answer2
        ? null
        : this.showError("Answers cannot be empty!")
      : this.showError("Question cannot be empty!");
    if (
      this.props.iceBreaker.question &&
      this.props.iceBreaker.answer1 &&
      this.props.iceBreaker.answer2
    ) {
      this.setState({ editing: !editing }, () => {
        this.state.editing ? this.ref.focus() : null;
      });
    }
  };

  showError = message => {
    this.setState({
      error: true,
      errorMessage: message
    });
  };

  dismissError = () => {
    this.setState({ error: false });
  };

  handleInput = name => event => {
    //There is probably a better way to handle this
    switch (name) {
      case "question":
        this.props.iceBreaker.question = event.nativeEvent.text;
        break;
      case "answer1":
        this.props.iceBreaker.answer1 = event.nativeEvent.text;
        break;
      case "answer2":
        this.props.iceBreaker.answer2 = event.nativeEvent.text;
        break;
      default:
        break;
    }
  };

  render() {
    var answerButton1 = (
      <TouchableOpacity
        style={
          this.state.answer1Selected
            ? styles.touchableSelected
            : styles.touchableNotSelected
        }
        onPress={this.highlightButton1}
      >
        <TextInput
          style={styles.answerText}
          editable={this.state.editing}
          pointerEvents={"box-none"}
          onChange={this.handleInput("answer1")}
        >
          {this.props.iceBreaker.answer1}
        </TextInput>
      </TouchableOpacity>
    );
    var answerButton2 = (
      <TouchableOpacity
        style={
          this.state.answer2Selected
            ? styles.touchableSelected
            : styles.touchableNotSelected
        }
        onPress={this.highlightButton2}
      >
        <TextInput
          style={styles.answerText}
          editable={this.state.editing}
          pointerEvents={"box-none"}
          onChange={this.handleInput("answer2")}
        >
          {this.props.iceBreaker.answer2}
        </TextInput>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <View style={styles.editButtonContainer}>
          <Button onPress={this.handleEditButton} style={styles.editButton}>
            {this.state.editing ? "done" : "edit"}
          </Button>
        </View>
        <Card style={styles.cardContainer}>
          <Card.Content style={styles.questionContainer}>
            <TextInput
              ref={ref => (this.ref = ref)}
              style={styles.question}
              multiline
              editable={this.state.editing}
              onChange={this.handleInput("question")}
            >
              {this.props.iceBreaker.question}
            </TextInput>
          </Card.Content>
          <View style={styles.answerContainer}>
            {answerButton1}
            {answerButton2}
          </View>
        </Card>
        <ErrorMessage
          visible={this.state.error}
          message={this.state.errorMessage}
          dismissError={this.dismissError}
        />
      </View>
    );
  }
}

export default IceBreaker;
