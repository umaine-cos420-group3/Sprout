import React from "react";
import { StyleSheet, ScrollView, Text} from "react-native";
//import { ExpoConfigView } from "@expo/samples";
import SignOutButton from "../components/ProfileScreen/SignOutButton";
import { Avatar, Card, Button, Icon } from 'react-native-paper';

const styles = StyleSheet.create({
  scollContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'lightgrey',
    padding: 50,
    

  }
});

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile",
    headerStyle: {
      backgroundColor: 'lightgrey',
      borderBottomColor: 'lightgrey',
    },
    headerTitleStyle: {
      fontSize: 40,
      textAlign:"center", 
      flex:1 
    },
  };
  _signOut = () => {
    this.props.navigation.navigate("Auth");
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView style={styles.scollContainer}>
        <Card>
        <Card.Title title="Susan" subtitle="Bio" left={(props) => <Avatar.Icon {...props} icon="person" />} />
          <Card.Content>
            <Text style={styles.paragraph}>
              Tell people something about yourself
            </Text>
            <Button icon="edit" mode="contained" onPress={this._editBioAsync}>
            Edit
            </Button>
         </Card.Content>
        </Card>
        <SignOutButton signOutFunction={this._signOut} />
      </ScrollView>
    );
  }
}
