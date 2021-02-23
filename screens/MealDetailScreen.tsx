import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import BodyText from '../components/BodyText';

const MealDetailScreen = () => {
	return (
		<View style={styles.screen}>
			<BodyText>The Meal Detail Screen!</BodyText>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default MealDetailScreen;
