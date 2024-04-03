import React, { useState } from "react";
import { Text, View, TextInput, Image, TouchableOpacity, StyleSheet, Modal, Button } from "react-native";
import { styles } from "./src/styles/StyleSheet";
import ImgComponent from "./src/components/ImgComponent";
import TextComponent from "./src/components/TxtComponent";
import TxtInput from "./src/components/InputComponent";
import BtnComponent from "./src/components/BtnComponent";

export default function App() {

  const [alcool, setAlcool] = useState("");
  const [gasolina, setGasolina] = useState("");
  const resultado = alcool/gasolina;

  const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  

  calcular = () => {
    console.log(resultado);
  }

  return (
    <View style={styles.container}>
      <ImgComponent styleImg={styles.img1} caminhoImg={require("./src/images/logo.png")}/>
      <TextComponent styleTxt={styles.Texto} txt="Qual melhor opção?" />
      <TextComponent styleTxt={styles.label} txt="Preço do Álcool por Litro:" />
     <TxtInput  styleInput={styles.input}
        onChangeText={text => setAlcool(text)}
        value={alcool}
        keyboardType="numeric"
      />
      <TextComponent styleTxt={styles.label} txt="Preço da Gasolina por Litro:" />
      
      <TxtInput
        styleInput={styles.input}
        onChangeText={text => setGasolina(text)}
        value={gasolina}
        keyboardType="numeric"
      />
      

   
     
      <BtnComponent styleTxt={styles.buttonText} styleBtn={styles.button} onPress={() => visModal(true)} txt="Calcular" />

    
      {/* true or false*/}
      <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.container}>
     
      
      <View style={styles.modalalg}>
          <View style={styles.modal1}>
        
          <ImgComponent styleImg={styles.img2} caminhoImg={require("./src/images/gas.png")}/>
        
          <TextComponent styleTxt={styles.textvalor} txt="Com o valor de:" />
          {resultado < 0.7 ? <Text style={styles.resultado}>Compensa usar Álcool</Text> : <Text style={styles.resultado}>Compensa usar Gasolina</Text> }
         
          <TextComponent styleTxt={styles.textalcool} txt={`Álcool: R$ ${alcool}`} />
          <TextComponent styleTxt={styles.textgasolina} txt={`Gasolina: R$ ${gasolina}`} />
        <BtnComponent styleBtn={styles.button} styleTxt={styles.buttonText} onPress={() => visModal(false)} txt="Voltar"/>
      
        
      
          
          </View>
        </View>
        </View>
      </Modal>
      
    </View>
  );
}


