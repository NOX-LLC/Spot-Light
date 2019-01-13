import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

export default ActionCard = ({
  text,
  textStyle = {},
  containerStyle = {},
  handlePress,
  buttonText = "Continue",
  buttonStyle = {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
      <TouchableOpacity
        onPress={handlePress}
      >
        <Text style={[styles.buttonText, buttonStyle]}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.red,
  },
  text: {
    color: Colors.yellow,
    textAlign: 'center',
    fontFamily: 'space-mono',
    fontSize: 45,
  },
  buttonText: {
    fontFamily: 'space-mono',
    color: Colors.lightGreen,
    fontSize: 35,
    textAlign: 'center',
  },
});
