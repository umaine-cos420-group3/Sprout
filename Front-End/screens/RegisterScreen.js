import React, { Component } from "react";
import {
  AsyncStorage,
  Button,
  Picker,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Base64 } from "js-base64";
import ErrorMessage from "../components/ErrorMessage";
import { getRandomQuestion, Users } from "../components/MockedDatabase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { scaledSize } from "../components/ScaledSize";

class RegisterScreen extends Component {
  state = {
    firstName: "",
    lasName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
    genderPreference: [],
    error: false,
    errorMessage: ""
  };

  static navigationOptions = {
    title: "Please register"
  };

  //this function is a little different from the one in SignInScreen, because we can
  //assume the index of new user.
  _signInAsync = async index => {
    await AsyncStorage.setItem("userLoggedIn", index.toString());
    this.props.navigation.navigate("Main");
  };

  handleChange = name => event => {
    this.setState({ [name]: event.nativeEvent.text });
  };

  dismissError = () => {
    this.setState({ error: false });
  };

  checkUserInputs = () => {
    if (!this.state.email) {
      this.setState({ error: true, errorMessage: "Empty email address!" });
      return;
    }
    if (!this.state.username) {
      this.setState({ error: true, errorMessage: "Empty username!" });
      return;
    }
    if (!this.state.password) {
      this.setState({ error: true, errorMessage: "Empty password!" });
      return;
    }
    if (this.state.password != this.state.confirmPassword) {
      this.setState({ error: true, errorMessage: "Passwords not the same!" });
      return;
    }
    if (!this.state.gender) {
      this.setState({ error: true, errorMessage: "Please Select a gender!" });
      return;
    }
    if (!this.state.genderPreference) {
      this.setState({
        error: true,
        errorMessage: "Please Select at least one gender preference!"
      });
      return;
    } else {
      const userToAdd = {
        username: this.state.username,
        email: this.state.email,
        password: Base64.encode(this.state.password),
        firstName: this.state.firstName,
        lastName: this.state.lasName,
        gender: this.state.gender,
        genderPreference: this.state.genderPreference,
        iceBreakerIndex: 0
      };
      getRandomQuestion(userToAdd); //usage of the function in MockedDatabase
      Users.push(userToAdd);
      this._signInAsync(Users.length - 1);
    }
  };

  handleGenderSelect = gender => () => {
    switch (gender) {
      case "male":
        this.setState({ gender: "M" });
        break;
      case "female":
        this.setState({ gender: "F" });
        break;
      case "other":
        this.setState({ gender: "O" });
        break;
    }
  };

  handlePreferenceSelect = gender => () => {
    const genderPreference = this.state.genderPreference;
    var index;
    switch (gender) {
      case "male":
        index = genderPreference.indexOf("M");
        if (index == -1) {
          genderPreference.push("M");
        } else {
          genderPreference.splice(index, 1);
        }
        break;
      case "female":
        index = genderPreference.indexOf("F");
        if (index == -1) {
          genderPreference.push("F");
        } else {
          genderPreference.splice(index, 1);
        }
        break;
    }
    this.setState({ genderPreference });
  };

  render() {
    return (
      <KeyboardAwareScrollView style={styles.scollContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          onChange={this.handleChange("firstName")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          onChange={this.handleChange("lastName")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email Address"
          onChange={this.handleChange("email")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChange={this.handleChange("username")}
        />

        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="Password"
          onChange={this.handleChange("password")}
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="Confirm Password"
          onChange={this.handleChange("confirmPassword")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Date of Birth (MM/DD/YY)"
          onChange={this.handleChange("dateOfBirth")}
        />

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Gender:</Text>
          <TouchableOpacity
            style={
              this.state.gender == "M"
                ? styles.touchableSelected
                : styles.touchableNotSelected
            }
            onPress={this.handleGenderSelect("male")}
          >
            <Text style={styles.label}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.gender == "F"
                ? styles.touchableSelected
                : styles.touchableNotSelected
            }
            onPress={this.handleGenderSelect("female")}
          >
            <Text style={styles.label}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.gender == "O"
                ? styles.touchableSelected
                : styles.touchableNotSelected
            }
            onPress={this.handleGenderSelect("other")}
          >
            <Text style={styles.label}>Other</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Interested in: </Text>
          <TouchableOpacity
            style={
              this.state.genderPreference.includes("M")
                ? styles.touchableSelected
                : styles.touchableNotSelected
            }
            onPress={this.handlePreferenceSelect("male")}
          >
            <Text style={styles.label}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              this.state.genderPreference.includes("F")
                ? styles.touchableSelected
                : styles.touchableNotSelected
            }
            onPress={this.handlePreferenceSelect("female")}
          >
            <Text style={styles.label}>Female</Text>
          </TouchableOpacity>
        </View>
        <Button title="Register!" onPress={this.checkUserInputs} />
        <ErrorMessage
          visible={this.state.error}
          message={this.state.errorMessage}
          dismissError={this.dismissError}
        />
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  textInput: {
    marginBottom: 20,
    height: 40,
    fontSize: scaledSize(20),
    borderColor: "white",
    borderBottomWidth: 1,
    marginTop: 5
  },
  scollContainer: {
    flex: 1,
    padding: 30,
    flexDirection: "column",
    backgroundColor: "mediumseagreen"
  },
  pickerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20
  },
  labelContainer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  label: {
    textAlign: "center",
    fontSize: scaledSize(20)
  },
  picker: {
    flexGrow: 4
  },
  touchableSelected: {
    flexGrow: 1,
    backgroundColor: "white"
  },
  touchableNotSelected: { flexGrow: 1 }
});

export default RegisterScreen;
