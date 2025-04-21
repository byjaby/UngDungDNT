import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Đổi tên component để tránh xung đột với Button gốc
const Button = (props) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[MyStyle.ButtonStyle, props.buttonStyle]} // kết hợp style mặc định và truyền vào
  >
    <Text style={MyStyle.TextStyle}>{props.text}</Text>
  </TouchableOpacity>
);

const ButtonTest2 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Button text="Say hello" onPress={() => alert("hello!")} />
      <Button
        text="Say goodbye"
        onPress={() => alert("goodbye!")}
        buttonStyle={{ backgroundColor: "#4dc2c2" }}
      />
    </View>
  );
};

export default ButtonTest2;

const MyStyle = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  TextStyle: {
    color: 'white',
    fontSize: 18,
  },
});
