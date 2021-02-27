import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface BodyTextProps extends TextProps {
  style?: object
}

const BodyText:React.FC<BodyTextProps> = ({style, children}) => <Text style={{...styles.text, ...style}}>{children}</Text>

const styles = StyleSheet.create({
	text: {
    fontFamily: 'open-sans',
    fontSize: 16
  }
});

export default BodyText;
