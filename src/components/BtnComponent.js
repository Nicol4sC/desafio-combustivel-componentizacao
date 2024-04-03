import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function BtnComponent({styleBtn, onPress, txt, styleTxt}) {

  return (
   <TouchableOpacity style={styleBtn} onPress={onPress}>
      <Text style={styleTxt}>{txt}</Text>
   </TouchableOpacity>
    
  );
}
