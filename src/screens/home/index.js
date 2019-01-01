import React from "react";
import Styles from "./style";
import { View, Text, Button, ActivityIndicator } from "react-native";
import DeviceInfo from "react-native-device-info";
import API from "../../api";
import Storage from "../../misc/storage";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    isLoading: true,
    deviceId: "",
    user: null
  };

  componentDidMount() {
    Storage.get(Storage.Keys.User).then(user => {
      if (user) {
        this.setState({
          user,
          isLoading: false
        });
      } else {
        this.getDeviceID();
      }
    });
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
        this.setState({
          user: { userName: "black-falcon20" }
        });
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
      content = (
        <View>
          <ActivityIndicator size="large" style={{ paddingBottom: 20 }} />
          <Text>Creating User...</Text>
        </View>
      );
    } else {
      content = (
        <View>
          <Text style={{ paddingBottom: 40 }}>
            <Text>you are </Text>
            <Text style={{ fontWeight: "bold" }}>
              {this.state.user.userName}
            </Text>
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate("Game")}
            style={Styles.playButton}
          >
            play
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate("Game")}
            style={Styles.secundaryButton}
          >
            play with friends
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate("Game")}
            style={Styles.secundaryButton}
          >
            solo practice
          </Text>
        </View>
      );
    }

    return <View style={Styles.mainContainer}>{content}</View>;
  }
}
