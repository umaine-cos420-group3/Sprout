import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import SignInScreen from "../screens/SignInScreen";
import RegisterScreen from "../screens/RegisterScreen";

const AuthStack = createStackNavigator({ SignIn: SignInScreen });
const RegStack = createStackNavigator({ RegisterScreen: RegisterScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      // You could add another route here for authentication.
      // Read more at https://reactnavigation.org/docs/en/auth-flow.html

      Main: MainTabNavigator,
      Auth: AuthStack,
      Reg: RegStack
    },
    {
      initialRouteName: "Auth"
    }
  )
);
