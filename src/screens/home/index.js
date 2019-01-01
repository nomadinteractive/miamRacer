import React from "react";
import Styles from "./style";
import { View, Text, Button, ActivityIndicator } from "react-native";
import DeviceInfo from "react-native-device-info";
import API from "../../api";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

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
    //TODO: Update this with the real registration user Endpoint
    API.shared
      .registerUser(this.state.deviceId)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
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
