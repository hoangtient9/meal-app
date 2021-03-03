import React from 'react';
import { View, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import BodyText from '../components/BodyText';
import { MEALS } from '../data/dummy-data';
import Colors from '../constants/colors';

const ListItem: React.FC = ({ children }) => {
	return (
		<View style={styles.item}>
			<BodyText>{children}</BodyText>
		</View>
	);
};

const MealDetailScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const mealId = navigation.getParam('mealId');
	const mealDetail = MEALS.find((meal) => meal.id === mealId);
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
	const mealId = navigation.getParam('mealId');
	const mealDetail = MEALS.find((meal) => meal.id === mealId);
	return {
		headerTitle: mealDetail?.title,
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item title="favorites" iconName="ios-star" />
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
