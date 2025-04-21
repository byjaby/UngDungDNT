import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ButtonTest = () => {
  return (
    <View style={{ padding: 20 }}>
      <Button title="Button 1" onPress={() => alert("hello!")} />
      
      <TouchableOpacity
        onPress={() => alert("hello 2!")}
        style={MyStyle.ButtonStyle}
      >
        <Text style={MyStyle.TextStyle}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonTest;

const MyStyle = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  TextStyle: {
    color: 'white',
    fontSize: 18,
  },
});
