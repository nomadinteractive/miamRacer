/** @format */

import { AppRegistry } from "react-native";
import { name as appName } from "../app.json";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/home";
import GameScreen from "./screens/game";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Game: {
      screen: GameScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(AppNavigator);
AppRegistry.registerComponent(appName, () => AppContainer);
