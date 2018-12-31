import React from "react";
import Styles from "./style";
import { View, Text, Button } from "react-native";
import DeviceInfo from 'react-native-device-info';

export default class HomeScreen extends React.Component {
  state={
    deviceId: ''
  }
  componentDidMount() {
    this.getDeviceID()
  }
  
  /**
   * getDeviceID
   *
   * Gets device id
   */
  getDeviceID = () => {
    const deviceId = DeviceInfo.getUniqueID();
    this.setState({
      deviceId
    }, () => this.registerUser())
  }
  
  /**
   * registerUser
   *
   * Registers user on the server and returns user info
   */
  registerUser = () => {
  
  }
  
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={Styles.mainContainer}>
        <Text>Home Screen</Text>
        <Button
          title="Start Game"
          onPress={() => this.props.navigation.navigate("Game")}
        />
      </View>
    );
  }
}
