import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Avatar, Button, Card, Icon } from "react-native-paper";
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
  bioContainer: {
    flexGrow: 2,
    justifyContent: "center",
    alignItems: "flex-start",
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
    maxHeight: height * 0.3 * 0.75
  },
  bio: {
    paddingHorizontal: width * 0.01,
    textAlign: "center",
    fontSize: scaledSize(12)
  }
});

const SelectedQuestion  = "Please enter your bio information";
class BioSection extends Component {
  state = {
    editing: false,
  };
  handleEditButton = () => {
    const editing = this.state.editing;
    this.setState({ editing: !editing }, () => {
      this.state.editing ? this.ref.focus() : null;
    });
  };

  handleInput = name => event => {
    //There is probably a better way to handle this
    switch (name) {
      case "bio":
        SelectedQuestion.question = event.nativeEvent.text;
        break;
      default:
        break;
    }
  };

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.editButtonContainer}>
          <Button onPress={this.handleEditButton} style={styles.editButton}>
            {this.state.editing ? "done" : "edit"}
          </Button>
        </View>
        <Card style={styles.cardContainer}>
        <Card.Title title="Susan" subtitle="Bio" left={(props) => <Avatar.Icon {...props} icon="person" />} />
          <Card.Content style={styles.bioContainer}>
            <TextInput
              ref={ref => (this.ref = ref)}
              style={styles.bio}
              multiline
              editable={this.state.editing}
              onChange={this.handleInput("question")}
            >
              {SelectedQuestion.question}
            </TextInput>
          </Card.Content>
        </Card>
      </View>
    );
  }
}

export default BioSection;
