import React, { useState } from "react";
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, Modal, Button } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function ImgComponent({caminhoImg, styleImg}) {

  return (
    <Image style={styleImg} source={caminhoImg}/>
    
  );
}


