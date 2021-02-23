import React from 'react';
import { View, StyleSheet } from 'react-native';

import BodyText from '../components/BodyText';

const CategoriesScreen = () => {
	return (
		<View style={styles.screen}>
			<BodyText>The Categories Screen!</BodyText>
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

export default CategoriesScreen;
