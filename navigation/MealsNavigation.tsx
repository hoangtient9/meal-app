import { createStackNavigator, } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigation = createStackNavigator({
	categories: CategoriesScreen,
	categoryMeal: {
		screen: CategoryMealScreen,
	},
  mealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigation)
