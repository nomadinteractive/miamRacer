import { StyleSheet, Platform, Dimensions } from "react-native";

let { width } = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    marginTop: Platform.OS === 'ios' ? 150 : 70,
    alignItems: "center",
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
    width: width / 4,
    height: '100%'
  },
});
