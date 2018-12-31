import React from "react";
import Styles from "./style";
import { View, Text, Button } from "react-native";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={Styles.mainContainer}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
