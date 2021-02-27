import React from 'react';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen: NavigationStackScreenComponent = ({
	navigation,
}) => {
	const categoryId = navigation.getParam('categoryId');
	const categoryMeals = MEALS.filter(
		(item) => item.categoryIds.indexOf(categoryId) >= 0
	);
	return <MealList navigation={navigation} categoryMeals={categoryMeals} />;
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
	const categoryId = navigation.getParam('categoryId');
	const category = CATEGORIES.find((item) => item.id === categoryId);

	return {
		headerTitle: category?.title,
	};
};

export default CategoryMealsScreen;
