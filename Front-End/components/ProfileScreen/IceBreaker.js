import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { scaledSize } from "../ScaledSize";

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
    alignItems: "center",
    borderBottomColor: "white",
    borderBottomWidth: 0.5
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

const MockedQuestionDataBase = [
  {
    question: "Would you rather eat pizza or burger for the rest of your life?",
    answer1: "Pizza",
    answer2: "Burger"
  },
  {
    question:
      "Would you rather know when you are going to die or how you are going to die?",
    answer1: "When",
    answer2: "How"
  },
  {
    question:
      "If you were reborn in a new life, would you rather be alive in the past or future?",
    answer1: "Past",
    answer2: "Future"
  }
];

let index = Math.floor(Math.random() * MockedQuestionDataBase.length);

const SelectedQuestion = MockedQuestionDataBase[index];

class IceBreaker extends Component {
  state = {
    editing: false,
    answer1Selected: false,
    answer2Selected: false
  };

  highlightButton1 = () => {
    this.setState({ answer1Selected: true, answer2Selected: false });
  };

  highlightButton2 = () => {
    this.setState({ answer2Selected: true, answer1Selected: false });
  };

  handleEdit = () => {
    this.setState({ editing: true });
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
        <TextInput style={styles.answerText} editable={this.state.editing}>
          {SelectedQuestion.answer1}
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
        <TextInput style={styles.answerText} editable={this.state.editing}>
          {SelectedQuestion.answer2}
        </TextInput>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <View style={styles.editButtonContainer}>
          <Button onPress={this.handleEdit} style={styles.editButton}>
            edit
          </Button>
        </View>
        <Card style={styles.cardContainer}>
          <Card.Content style={styles.questionContainer}>
            <TextInput
              style={styles.question}
              multiline
              editable={this.state.editing}
            >
              {SelectedQuestion.question}
            </TextInput>
          </Card.Content>
          <View style={styles.answerContainer}>
            {answerButton1}
            {answerButton2}
          </View>
        </Card>
      </View>
    );
  }
}

export default IceBreaker;
