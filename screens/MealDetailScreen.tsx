import React, { useCallback, useEffect } from 'react';
import { Button, Image, ScrollView, StyleSheet, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useDispatch } from 'react-redux';
import BodyText from '../components/BodyText';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/colors';
import { toggleFavorite } from '../store/actions/meals';
import { useAppSelector } from '../store/store';
import { meal } from '../store/types';

const ListItem: React.FC = ({ children }) => {
	return (
		<View style={styles.item}>
			<BodyText>{children}</BodyText>
		</View>
	);
};

const MealDetailScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const dispatch = useDispatch();
	const mealId: string = navigation.getParam('mealId');
	const availableMeals = useAppSelector((state) => state.meals.meals);
	const currentMealIsFavorite = useAppSelector((state) =>
		state.meals.favoritesMeals.some((meal) => meal.id === mealId)
	);

	const mealDetail = availableMeals.find((meal: meal) => meal.id === mealId);
	const toggleFavHandler = useCallback(() => {
		dispatch(toggleFavorite(mealId));
	}, [dispatch, mealId]);

	useEffect(() => {
		navigation.setParams({
			isFavorite: currentMealIsFavorite,
		});
	}, [currentMealIsFavorite]);

	useEffect(() => {
		navigation.setParams({
			toggleFav: toggleFavHandler,
		});
	}, [toggleFavHandler]);
	return (
		<ScrollView>
			<Image source={{ uri: mealDetail?.imageUrl }} style={styles.image} />
			<View style={styles.detail}>
				<BodyText>{mealDetail?.duration}</BodyText>
				<BodyText>{mealDetail?.complexity}</BodyText>
				<BodyText>{mealDetail?.affordability}</BodyText>
			</View>
			<BodyText style={styles.title}>Ingredients</BodyText>
			<View>
				{mealDetail?.ingredients.map((item, i) => (
					<ListItem key={i}>{item}</ListItem>
				))}
			</View>
			<BodyText style={styles.title}>Steps</BodyText>
			<View>
				{mealDetail?.steps.map((item, i) => (
					<ListItem key={i}>{item}</ListItem>
				))}
			</View>

			<Button
				title="Categories"
				onPress={() => {
					navigation.popToTop();
				}}
			/>
		</ScrollView>
	);
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
	const mealTitle = navigation.getParam('mealTitle');
	const toggleFav = navigation.getParam('toggleFav');
	const isFavorite = navigation.getParam('isFavorite');
	return {
		headerTitle: mealTitle,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					title="favorites"
					iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
					onPress={toggleFav}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	image: {
		width: '100%',
		height: 200,
	},
	detail: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	title: {
		fontSize: 22,
		fontFamily: 'open-sans-bold',
		textAlign: 'center',
	},
	item: {
		padding: 10,
		marginHorizontal: 20,
		marginVertical: 15,
		borderRadius: 8,
		borderColor: Colors.primaryColor,
		borderWidth: 1,
	},
});

export default MealDetailScreen;
