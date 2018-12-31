import React from "react";
import Styles from "./style";
import { View, Text, Button, ActivityIndicator } from "react-native";
import DeviceInfo from "react-native-device-info";

export default class HomeScreen extends React.Component {
  state = {
    isLoading: true,
    deviceId: ""
  };
  componentDidMount() {
    this.getDeviceID();
  }

  /**
   * getDeviceID
   *
   * Gets device id
   */
  getDeviceID = () => {
    const deviceId = DeviceInfo.getUniqueID();
    this.setState(
      {
        deviceId
      },
      () => this.registerUser()
    );
  };

  /**
   * registerUser
   *
   * Registers user on the server and returns user info
   */
  registerUser = () => {
    //TODO: Update this with the registration user
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 2500);
  };

  static navigationOptions = {
    header: null
  };

  render() {
    let content;
    if (this.state.isLoading) {
      content = <ActivityIndicator size="large" />;
    } else {
      content = (
        <View>
          <Text style={{ paddingBottom: 40 }}>
            <Text>you are</Text>
            <Text style={{ fontWeight: "bold" }}> red-lobster9</Text>
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate("Game")}
            style={{
              fontSize: 40,
              textAlign: "center",
              textDecorationLine: "underline",
              paddingBottom: 30
            }}
          >
            play
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate("Game")}
            style={{
              fontSize: 12,
              textAlign: "center",
              textDecorationLine: "underline",
              paddingBottom: 10
            }}
          >
            play with friends
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate("Game")}
            style={{
              fontSize: 12,
              textAlign: "center",
              textDecorationLine: "underline",
              paddingBottom: 20
            }}
          >
            solo practice
          </Text>
        </View>
      );
    }

    return <View style={Styles.mainContainer}>{content}</View>;
  }
}
