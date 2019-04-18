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

//Use width and height of the phone screen to dynamically set the component styles
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
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
    fontSize: scaledSize(22) //scaledSize() automatically changes the font size if the screen is bigger or smaller
  }
});

/*
To use this class, `iceBreaker` has to be assigned in props (See ProfileScreen.js for example). 
iceBreaker prop has to be an object with attributes question, answer1 and answer2. Otehrwise, 
this component will break. (I mean I can add error checkings but that's for a later date)
*/

class IceBreaker extends Component {
  state = {
    editing: false,
    answer1Selected: false,
    answer2Selected: false,
    error: false,
    errorMessage: ""
  };

  handleButton1 = () => {
    this.setState({ answer1Selected: true, answer2Selected: false });
    if (this.props.compareAnswer) {
      if (this.props.answerSelected == 1) {
        showError("They picked the same answer!!");
      }
      if (this.props.answerSelected == 2) {
        showError("They picked the other answer.");
      }
    } else {
      this.props.user.answerSelected = 1;
    }
  };

  handleButton2 = () => {
    this.setState({ answer2Selected: true, answer1Selected: false });
    if (this.props.compareAnswer) {
      if (this.props.answerSelected == 2) {
        showError("They picked the same answer!!");
      }
      if (this.props.answerSelected == 1) {
        showError("They picked the other answer.");
      }
    } else {
      this.props.user.answerSelected = 2;
    }
  };

  handleEditButton = () => {
    const editing = this.state.editing;
    this.props.user.iceBreaker.question
      ? this.props.user.iceBreaker.answer1 && this.props.user.iceBreaker.answer2
        ? null
        : this.showError("Answers cannot be empty!")
      : this.showError("Question cannot be empty!");
    if (
      this.props.user.iceBreaker.question &&
      this.props.user.iceBreaker.answer1 &&
      this.props.user.iceBreaker.answer2
    ) {
      this.setState({ editing: !editing }, () => {
        this.state.editing ? this.ref.focus() : null; //this sets focus to the question input and calls for keyboard
      });
    }
  };

  //showError and dismissError functions are needed for ErrorMessage component, as well as
  //variables error and errorMessage in state. This is no way near a good implementation
  //and I can probably improve it, but I'd rather focus on getting as much done as
  //possible for now. - Enoch
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
    switch (name) {
      case "question":
        this.props.user.iceBreaker.question = event.nativeEvent.text;
        break;
      case "answer1":
        this.props.user.iceBreaker.answer1 = event.nativeEvent.text;
        break;
      case "answer2":
        this.props.user.iceBreaker.answer2 = event.nativeEvent.text;
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
        onPress={this.handleButton1}
      >
        <TextInput
          style={styles.answerText}
          editable={this.state.editing}
          pointerEvents={"box-none"}
          onChange={this.handleInput("answer1")}
        >
          {this.props.user.iceBreaker.answer1}
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
        onPress={this.handleButton2}
      >
        <TextInput
          style={styles.answerText}
          editable={this.state.editing}
          pointerEvents={"box-none"}
          onChange={this.handleInput("answer2")}
        >
          {this.props.user.iceBreaker.answer2}
        </TextInput>
      </TouchableOpacity>
    );

    //conditional rendering
    const editButton = this.props.editable ? (
      <View style={styles.editButtonContainer}>
        <Button onPress={this.handleEditButton}>
          {this.state.editing ? "done" : "edit"}
        </Button>
      </View>
    ) : (
      <View />
    );

    return (
      <View style={styles.container}>
        {editButton}
        <Card style={styles.cardContainer}>
          <Card.Content style={styles.questionContainer}>
            <TextInput
              ref={ref => (this.ref = ref)} //this is the reference used in handleEditButton function
              style={styles.question}
              multiline
              editable={this.state.editing}
              onChange={this.handleInput("question")}
            >
              {this.props.user.iceBreaker.question}
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
