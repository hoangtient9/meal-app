import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { StackNavigationOptions } from 'react-navigation-stack/lib/typescript/src/vendor/types';

import Colors from '../constants/colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

const defaultNavigationOptions: StackNavigationOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accentColor,
	headerTitleStyle: {
		fontFamily: 'open-sans-bold',
	},
};

const MealsNavigation = createStackNavigator(
	{
		Categories: CategoriesScreen,
		CategoryMeals: {
			screen: CategoryMealsScreen,
		},
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: defaultNavigationOptions,
	}
);

const FavoritesNavigation = createStackNavigator(
	{
		Favorites: FavoritesScreen,
		MealDetail: MealDetailScreen,
	},
	{
		defaultNavigationOptions: defaultNavigationOptions,
	}
);

const FiltersNavigation = createStackNavigator(
	{
		Filters: FiltersScreen,
	},
	{
		defaultNavigationOptions: defaultNavigationOptions,
	}
);

const screenConfig = {
	Meals: {
		screen: MealsNavigation,
		navigationOptions: {
			tabBarIcon: (tabInfo: { tintColor: string }) => (
				<Ionicons name="ios-restaurant" color={tabInfo.tintColor} size={25} />
			),
			tabBarColor: Colors.primaryColor,
		},
	},
	Favorites: {
		screen: FavoritesNavigation,
		navigationOptions: {
			tabBarIcon: (tabInfo: { tintColor: string }) => (
				<Ionicons name="ios-star" color={tabInfo.tintColor} size={25} />
			),
			tabBarColor: Colors.accentColor,
		},
	},
};

const MealsFavTabNavigation =
	Platform.OS === 'android'
		? createMaterialBottomTabNavigator(screenConfig, {
				activeColor: 'white',
				shifting: true,
				barStyle: {
					backgroundColor: Colors.primaryColor,
				},
		  })
		: createBottomTabNavigator(screenConfig, {
				tabBarOptions: {
					activeTintColor: Colors.accentColor,
				},
		  });

	const MainMeal = createDrawerNavigator({
		MealFavs: MealsFavTabNavigation,
		Filters: FiltersNavigation
	})

export default createAppContainer(MainMeal);
