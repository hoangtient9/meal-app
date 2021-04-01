import React, { useCallback, useEffect, useState } from 'react';
import { Platform, StyleSheet, Switch, View } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { useDispatch } from 'react-redux';
import BodyText from '../components/BodyText';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/colors';
import { setFilters } from '../store/actions/meals';

interface SwitchProps {
	state: boolean;
	onchange: (newValue: boolean) => void;
	title: string;
}

const FiltersSwitch: React.FC<SwitchProps> = ({ title, state, onchange }) => {
	return (
		<View style={styles.switchContainer}>
			<BodyText>{title}</BodyText>
			<Switch
				thumbColor={Colors.primaryColor}
				trackColor={{
					false: '',
					true: Platform.OS === 'android' ? Colors.primaryColor : '',
				}}
				value={state}
				onValueChange={onchange}
			/>
		</View>
	);
};

const FiltersScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
	const [isVegan, setIsVegan] = useState<boolean>(false);
	const [isVegetarian, setIsVegetarian] = useState<boolean>(false);
	const [isLactoseFree, setIsLactoseFree] = useState<boolean>(false);

	const dispatch = useDispatch();

	const saveFilters = useCallback(() => {
		const appliedFilters = {
			glutenFree: isGlutenFree,
			lactoseFree: isLactoseFree,
			vegan: isVegan,
			vegetarian: isVegetarian,
		};

		dispatch(setFilters(appliedFilters));
	}, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

	useEffect(() => {
		navigation.setParams({ save: saveFilters });
	}, [saveFilters]);

	return (
		<View style={styles.screen}>
			<FiltersSwitch
				state={isGlutenFree}
				title="Gluten Free"
				onchange={(newValue) => {
					setIsGlutenFree(newValue);
				}}
			/>
			<FiltersSwitch
				state={isVegan}
				title="Vegan"
				onchange={(newValue) => {
					setIsVegan(newValue);
				}}
			/>
			<FiltersSwitch
				state={isVegetarian}
				title="Vegetarian"
				onchange={(newValue) => {
					setIsVegetarian(newValue);
				}}
			/>
			<FiltersSwitch
				state={isLactoseFree}
				title="Gluten Free"
				onchange={(newValue) => {
					setIsLactoseFree(newValue);
				}}
			/>
		</View>
	);
};

FiltersScreen.navigationOptions = ({ navigation }) => {
	return {
		headerTitle: 'Filters',
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
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={HeaderButton}>
				<Item
					iconName="ios-save"
					title="save"
					onPress={navigation.getParam('save')}
				/>
			</HeaderButtons>
		),
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	switchContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 20,
		marginVertical: 10,
	},
});

export default FiltersScreen;
