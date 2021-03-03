import React from 'react';
import {Platform} from 'react-native'
import {
	HeaderButton,
	HeaderButtonProps,
} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/colors'

const CustomHeaderButton = (props: HeaderButtonProps) => (
	<HeaderButton {...props} IconComponent={Ionicons} iconSize={25} color={Platform.OS === 'android' ? 'white' : Colors.primaryColor } />
);

export default CustomHeaderButton;
