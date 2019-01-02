import { StyleSheet, Platform, Dimensions } from "react-native";

let { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    // flex: 1,
    marginTop: Platform.OS === 'ios' ? 150 : 70,
    alignItems: "center",
    // justifyContent: "center"
  },
  textStyle: {
    fontSize: 100
  },
  questionText: {
    fontSize: 15
  },
  timerText: {
    fontSize: 70,
    // marginBottom: Platform.OS === 'ios' ? height / 7 :  height / 15
  },
  answerHolder: {
    // backgroundColor: 'red',
    marginTop: Platform.OS === 'ios' ? height / 7 :  height / 5.5,
    height: '100%'
  },
  answerField: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    // height: '6%'
    height: height / 10
  }
});
