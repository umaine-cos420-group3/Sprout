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
import { Users } from "../MockedDatabase";

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
    marginTop: height * 0.05
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
    fontSize: scaledSize(18)
  }
});

const SelectedQuestion = "Please enter your bio information";
class BioSection extends Component {
  state = {
    editing: false
  };
  handleEditButton = () => {
    const editing = this.state.editing;
    this.setState({ editing: !editing }, () => {
      this.state.editing ? this.ref.focus() : null;
    });
  };

  handleInput = event => {
    const index = Users.findIndex(this.props.user);
    Users[index].bio = event.nativeEvent.text;
  };

  render() {
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
          <Card.Title
            title={this.props.user.firstName}
            subtitle="Bio"
            left={props => <Avatar.Icon {...props} icon="person" />}
          />
          <Card.Content>
            <TextInput
              ref={ref => (this.ref = ref)}
              style={styles.bio}
              multiline
              editable={this.state.editing}
              onChange={this.handleInput}
            >
              {this.props.user.bio}
            </TextInput>
          </Card.Content>
        </Card>
      </View>
    );
  }
}

export default BioSection;
