import React from "react";
import { Text } from "react-native";

export default function TextComponent({styleTxt, txt}) {

  return (
    <Text style={styleTxt}>{txt}</Text>
    
    
  );
}
