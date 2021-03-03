import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const categoryId = navigation.getParam('categoryId');
	const categoryMeals = MEALS.filter(
		(item) => item.id === 'm1' || item.id === 'm2'
	);
	return <MealList navigation={navigation} categoryMeals={categoryMeals} />;
};

FavoritesScreen.navigationOptions = ({ navigation }) => ({
	title: 'Favorites',
	headerLeft: () => (
		<HeaderButtons HeaderButtonComponent={HeaderButton}>
			<Item
				iconName="ios-menu"
				title="menu"
				onPress={() => {
					navigation.dispatch(DrawerActions.toggleDrawer());
				}}
			/>
		</HeaderButtons>
	),
});

export default FavoritesScreen;
