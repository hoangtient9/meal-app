import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButtons';
import BodyText from '../components/BodyText';
import {MEALS} from '../data/dummy-data'

const MealDetailScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const mealId = navigation.getParam('mealId');
	const mealDetail = MEALS.find(meal => meal.id === mealId)
	return (
		<View style={styles.screen}>
			<BodyText>{mealDetail?.title}</BodyText>
			<Button
				title="Categories"
				onPress={() => {
					navigation.popToTop();
				}}
			/>
		</View>
	);
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
	const mealId = navigation.getParam('mealId');
	const mealDetail = MEALS.find(meal => meal.id === mealId)
	return {
		headerTitle:mealDetail?.title,
		headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="favorites" iconName="ios-star"/></HeaderButtons>
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default MealDetailScreen;
