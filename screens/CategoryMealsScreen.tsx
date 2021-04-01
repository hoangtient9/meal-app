import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import BodyText from '../components/BodyText';
import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummy-data';
import { useAppSelector } from '../store/store';
import { meal } from '../store/types';

const CategoryMealsScreen: NavigationStackScreenComponent = ({
	navigation,
}) => {
	const categoryId = navigation.getParam('categoryId');
	const availableMeals = useAppSelector((state) => state.meals.filteredMeals);

	const categoryMeals = availableMeals.filter(
		(item: meal) => item.categoryIds.indexOf(categoryId) >= 0
	);

	if (categoryMeals.length === 0) {
		return (
			<View style={styles.content}>
				<BodyText>No meals. Checking filters setting</BodyText>
			</View>
		);
	}
	return <MealList navigation={navigation} categoryMeals={categoryMeals} />;
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
	const categoryId = navigation.getParam('categoryId');
	const category = CATEGORIES.find((item) => item.id === categoryId);

	return {
		headerTitle: category?.title,
	};
};

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoryMealsScreen;
