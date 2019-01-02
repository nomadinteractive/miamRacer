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
    this.registerUser(deviceId);
  };

  retryRegisterUser = () => {
    this.setState({
      isLoading: true
    });
    this.getDeviceID();
  };

  /**
   * registerUser
   *
   * Registers user on the server and returns user info
   */
  registerUser = uuid => {
    API.shared
      .registerUser(uuid)
      .then(user => {
        Storage.save(Storage.Keys.User, user);
        this.setState({
          user
        });
      })
      .catch(error => {
        console.log("===== Error =======");
        console.log(error);
      })
      .finally(() => {
        this.setState({
          isLoading: false
        });
      });
  };

  // Better used handling
  getUserName = () => {
    if (this.state.user) {
      const user = this.state.user;
      const suffix = user.number > 0 ? user.number : "";
      const username = user.color + "-" + user.animal + suffix;
      return username;
    }

    return "== Error ==";
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
    } else if (this.state.user) {
      content = (
        <View>
          <Text style={{ paddingBottom: 40 }}>
            <Text>you are </Text>
            <Text style={{ fontWeight: "bold" }}>{this.getUserName()}</Text>
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
    } else {
      content = (
        <View>
          <Text style={{ paddingBottom: 20 }}>
            We had an error creating your user
          </Text>
          <Button onPress={() => this.retryRegisterUser()} title="try again" />
        </View>
      );
    }

    return <View style={Styles.mainContainer}>{content}</View>;
  }
}
