import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from 'react';

const Square = ({ text, bgColor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const data = Array.from({ length: 20 }, (_, i) => i + 1); // Tạo 20 phần tử

const FlexBox2 = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((item, index) => (
          <Square key={item} text={`Square ${index + 1}`} />
        ))}
      </View>
    </ScrollView>
  );
};

export default FlexBox2;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff"
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    margin: 5, // ✅ Thêm khoảng cách giữa các ô
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
