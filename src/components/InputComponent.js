import React from "react";
import { TextInput } from "react-native";

export default function TxtInput({styleInput, onChangeText, value, keyboardType}) {

  return (
    <TextInput style={styleInput} onChangeText={onChangeText} value={value} keyboardType={keyboardType}/>
    
    
  );
}
