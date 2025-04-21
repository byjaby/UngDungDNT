import { StyleSheet, View, Text } from "react-native"; // ✅ Thêm Text
import React from 'react';

const Square = ({ text, bgColor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <Square text="Square 1" />
      <Square text="Square 2" bgColor="#4dc2c2" />
      <Square text="Square 3" bgColor="#ff637c" />
    </View>
  );
};

export default FlexBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  }
});
