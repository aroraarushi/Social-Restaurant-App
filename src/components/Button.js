import React, { Children } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button =({title,style,textStyle,onPress})=>{
    return(
        <TouchableOpacity style={[styles.button,style]} onPress={onPress}>
            <Text style={[styles.buttonText,textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#007BFF', // Default color (Blue)
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
});

export default Button