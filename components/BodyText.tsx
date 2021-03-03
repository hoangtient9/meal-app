import React from 'react';
import { Text, StyleSheet, TextProps, TextStyle } from 'react-native';

interface BodyTextProps extends TextProps {
  style?: TextStyle
}

const BodyText:React.FC<BodyTextProps> = ({style, children}) => <Text style={{...styles.text, ...style}}>{children}</Text>

const styles = StyleSheet.create({
	text: {
    fontFamily: 'open-sans',
    fontSize: 16
  }
});

export default BodyText;
