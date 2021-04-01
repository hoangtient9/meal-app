import React from 'react';
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import MealItem from '../components/MealItem';
import { useAppSelector } from '../store/store';

interface Meal {
	title: string;
	imageUrl: string;
	duration: number;
	complexity: string;
	affordability: string;
	id: string;
}

interface MealListProps {
	categoryMeals: Meal[];
	navigation: NavigationStackProp;
}

const MealList: React.FC<MealListProps> = ({ navigation, categoryMeals }) => {
	const mealsFavorite = useAppSelector((state) => state.meals.favoritesMeals);
	const renderItem: ListRenderItem<Meal> = ({ item }) => {
		const isFavorite = mealsFavorite.some((meal) => meal.id === item.id);
		return (
			<MealItem
				onMealSelect={() => {
					navigation.navigate('MealDetail', {
						mealId: item.id,
						mealTitle: item.title,
						isFavorite
					});
				}}
				title={item.title}
				image={item.imageUrl}
				duration={item.duration}
				complexity={item.complexity}
				affordability={item.affordability}
			/>
		);
	};
	return (
		<View style={styles.screen}>
			<FlatList
				data={categoryMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				style={{ width: '100%', paddingHorizontal: 10 }}
			/>
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

export default MealList;
