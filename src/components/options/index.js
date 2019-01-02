import React from "react";
import Styles from "./style";
import { View, Text, Button, TouchableOpacity} from "react-native";

export default class OptionHolder extends React.Component {
  state={
    text: 'blue',
    textColor: '#f00',
    questionText: 'pick the color written above',
    questionTextColor: '#6c6c6c',
    timerText: '6.4',
    timerTextColor: '#dadada',
    count: ''
  }
  
  static navigationOptions = {
    header: null
  };
  
  sendAnswer = () => {
    alert(this.props.backgroundColor)
    this.setState({ userAnswer: this.props.backgroundColor })
  }
  
  render() {
    return (
      <TouchableOpacity onPress={this.sendAnswer}>
      <View style={[{ backgroundColor: this.props.backgroundColor}, Styles.answerField]}>
      </View>
      </TouchableOpacity>
    );
  }
}
