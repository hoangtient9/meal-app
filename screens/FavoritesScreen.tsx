import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import BodyText from '../components/BodyText';
import HeaderButton from '../components/HeaderButton';
import MealList from '../components/MealList';
import { useAppSelector } from '../store/store';

const FavoritesScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const categoryId = navigation.getParam('categoryId');
	const favoriteMeals = useAppSelector((state) => state.meals.favoritesMeals);

	if (!favoriteMeals || favoriteMeals.length === 0) {
		return (
			<View style={styles.content}>
				<BodyText>Not found meals favorite. Add some meal</BodyText>
			</View>
		);
	}

	return <MealList navigation={navigation} categoryMeals={favoriteMeals} />;
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

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default FavoritesScreen;
