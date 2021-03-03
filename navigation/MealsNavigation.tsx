import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationRouteConfigMap, NavigationRouter } from 'react-navigation';
import { createBottomTabNavigator, NavigationMaterialTabScreenComponent } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Route, StackNavigationOptions } from 'react-navigation-stack/lib/typescript/src/vendor/types';

import Colors from '../constants/colors';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { RotationGestureHandlerEventExtra } from 'react-native-gesture-handler';
import BodyText from '../components/BodyText';

const defaultNavigationOptions: StackNavigationOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.accentColor,
	headerTitleStyle: {
		fontFamily: 'open-sans-bold',
	},
	headerBackTitleStyle: {
		fontFamily: 'open-sans'
	}
	
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

const screenConfig= {
	Meals: {
		screen: MealsNavigation,
		navigationOptions: {
			tabBarIcon: (tabInfo: { tintColor: string }) => (
				<Ionicons name="ios-restaurant" color={tabInfo.tintColor} size={25} />
			),
			tabBarColor: Colors.primaryColor,
			tabBarLabel: Platform.OS === 'android'? <BodyText style={{fontFamily: 'open-sans-bold'}}>Meals</BodyText> : 'Meals'
		},
	},
	Favorites: {
		screen: FavoritesNavigation,
		navigationOptions: {
			tabBarIcon: (tabInfo: { tintColor: string }) => (
				<Ionicons name="ios-star" color={tabInfo.tintColor} size={25} />
			),
			tabBarColor: Colors.accentColor,
			tabBarLabel: Platform.OS === 'android'? <BodyText style={{fontFamily: 'open-sans-bold'}}>Favorites</BodyText> : 'Meals'
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
					labelStyle: {
						fontFamily: 'open-sans-bold'
					}
				},
		  });

	const MainMeal = createDrawerNavigator({
		MealFavs: MealsFavTabNavigation,
		Filters: FiltersNavigation
	}, {contentOptions: {
		activeTintColor: Colors.accentColor,
		labelStyle: {
			fontFamily: 'open-sans-bold',
			fontSize: 20
		}
	}})

export default createAppContainer(MainMeal);
