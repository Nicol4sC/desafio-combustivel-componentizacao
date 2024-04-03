import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"black"
      },
      img1:{
        height:160,
        width: 160,
        resizeMode:"cover",
      },
      img2:{
        height:160,
        width: 160,
        resizeMode:"cover",
        marginTop: 90,
      },
     label:{
        color:"white"
     },
      input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "white"
      },
      Texto:{
        fontSize:30,
        color: "white"
      },
      button: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
      resultado: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
      color: 'white',
    
      },
      modal1: {
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
      },
    
      modalalg: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      },

      textresult: {
        justifyContent: "center",
        alignItems: "center",
        fontSize:20,
        color: "white"
      },

      textvalor:{
        fontSize: 30,
        color: "green"
      },

      textgasolina: {
        color:"white"
      },

      textalcool:{
        color:"white"
      },
});