import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    height: '60%'
  },
  textStyle: {
    fontSize: 100,
    marginTop: Platform.OS === 'ios' ? 100 : 70,
  },
  questionText: {
    fontSize: 15
  },
  timerText: {
    fontSize: 70,
  },
  answerHolder: {
    height: '40%',
    marginTop: Platform.OS === 'ios' ? 5 :  5,
  },
  answerField: {
    flexDirection: 'row',
    height: '33%'
  }
});
