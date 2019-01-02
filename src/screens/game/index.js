import React from "react";
import Styles from "./style";
import { View, Text, Button, SafeAreaView } from "react-native";
import OptionHolder from '../../components/options'

export default class GameScreen extends React.Component {
  /**
   * constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      text: 'blue',
      textColor: '#f00',
      questionText: 'pick the color written above',
      questionTextColor: '#6c6c6c',
      timerText: '6.4',
      timerTextColor: '#dadada',
      secondsRemainingForGameToStart: 3,
      secondsRemainingForUserToRespond: 10,
      showStartTimer: true,
      isLoading: false
    };
  }
  
  /**
   * componentDidMount
   */
  componentDidMount() {
    this.interval = setInterval(this.tickForStart, 1000);
  }
  
  /**
   * componentWillUnmount
   */
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  /**
   * tick
   *
   * ticks before each game question starts
   */
  tickForStart = () => {
    this.setState({secondsRemainingForGameToStart: this.state.secondsRemainingForGameToStart - 1});
    if (this.state.secondsRemainingForGameToStart <= 0) {
      clearInterval(this.interval);
      this.setState({
        secondsRemainingForUserToRespond: 1
      }, () => this.interval = setInterval(this.tickForRespond, 1000))
    }
  }
  
  /**
   * tick
   *
   * ticks before each game session starts and calls for the next game question
   */
  tickForRespond = () => {
    this.setState({secondsRemainingForUserToRespond: this.state.secondsRemainingForUserToRespond - 1});
    if (this.state.secondsRemainingForUserToRespond <= 0) {
      clearInterval(this.interval);
      
      // Make a call to the server to submit the user's answer
      // this.setState({ isLoading: true })
      
      
      // this.setState({
      //   secondsRemainingForGameToStart: 3
      // }, () => this.interval = setInterval(this.tickForStart, 1000))
    }
  }
  
  static navigationOptions = {
    header: null
  };

  render() {
    if(this.state.isLoading) {
      return (
        <View style={{ height: '100%',  alignItems: "center", justifyContent: 'center'}}>
    
          <View>
            <Text style={[{ color: this.state.timerTextColor}, Styles.timerText]}>Good things happen when we wait...</Text>
          </View>
  
        </View>
      )
    }
    
    if(this.state.showStartTimer && this.state.secondsRemainingForGameToStart !== 0) {
      return (
        <View style={{ height: '100%',  alignItems: "center", justifyContent: 'center'}}>
  
          <View>
            <Text style={[{ color: this.state.timerTextColor}, Styles.timerText]}>{this.state.secondsRemainingForGameToStart}</Text>
          </View>
          
        </View>
      )
    }
    
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View>
          <View style={Styles.mainContainer}>
            <View>
              <Text style={[{ color: this.state.textColor}, Styles.textStyle]}>{this.state.text}</Text>
            </View>
      
            <View>
              <Text style={[{ color: this.state.questionTextColor}, Styles.questionText]}>{this.state.questionText}</Text>
            </View>
      
            <View>
              <Text style={[{ color: this.state.timerTextColor}, Styles.timerText]}>{this.state.secondsRemainingForUserToRespond}</Text>
            </View>
          </View>
    
          <View style={Styles.answerHolder}>
            <View style={Styles.answerField}>
              <OptionHolder backgroundColor={'#ff0000'}/>
              <OptionHolder backgroundColor={'#d200ff'}/>
              <OptionHolder backgroundColor={'#00fe00'}/>
              <OptionHolder backgroundColor={'#ff007b'}/>
            </View>
            <View style={Styles.answerField}>
              <OptionHolder backgroundColor={'#fdd500'}/>
              <OptionHolder backgroundColor={'#bcbcbc'}/>
              <OptionHolder backgroundColor={'#1f00ff'}/>
              <OptionHolder backgroundColor={'#ff6700'}/>
            </View>
            <View style={Styles.answerField}>
              <OptionHolder backgroundColor={'#112a58'}/>
              <OptionHolder backgroundColor={'#741e00'}/>
              <OptionHolder backgroundColor={'#741e00a'}/>
              <OptionHolder backgroundColor={'#000'}/>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
