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
    fontSize: 70
  },
  answerField: {
    // backgroundColor: 'blue',
    width: width / 4,
    height: '100%'
    // marginTop: height / 10
  },
});
