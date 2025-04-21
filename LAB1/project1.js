import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloWorld = () => {
  return (
    <View style={MyStyle.ViewStyle}>
      <Text style={MyStyle.TextStyle}>Hello World</Text>
    </View>
  );
};

export default HelloWorld;

const MyStyle =StyleSheet.create(
  {
    ViewStyle:{
      width:100,
      height:100,
      backgroundColor:'aqua',
      alignItems:'center',
      justifyContent:'centerr',
    },
    TextStyle:{
      color:'black'
    }
  }
)
