import React from "react"
import { StyleSheet, Text, TextProps } from "react-native";

const styles = StyleSheet.create({
  buttonText: {
    color: 'white', fontWeight: 'bold', textAlign: 'center'
  },
  todoText: {
    color: 'black', textAlign: 'left', fontWeight: '600'
  },
  
})

interface TextComponentProps extends TextProps {
  text: string;
  styleOption: keyof typeof styles;
}


const TextComponent = ({
  text, styleOption
}: TextComponentProps ) => {
  return (
    <>
      <Text style={styles[styleOption]} >{text}</Text>
    </>
  )
};

export default TextComponent;
