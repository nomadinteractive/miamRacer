import React from "react";
import Styles from "./style";
import { View, Text, Button } from "react-native";

export default class GameScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={Styles.mainContainer}>
        <Text>Game Screen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
