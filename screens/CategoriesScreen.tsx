import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import CategoryGirdTitle from '../components/CategoryGirdTitle';
import HeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../data/dummy-data';

interface ItemProps {
	title: string;
	id: string;
	color: string;
}

const CategoriesScreen: NavigationStackScreenComponent = ({ navigation }) => {
	const renderItem: ListRenderItem<ItemProps> = ({ item }) => (
		<CategoryGirdTitle
			title={item.title}
			color={item.color}
			onSelect={() => {
				navigation.navigate('CategoryMeals', { categoryId: item.id });
			}}
		/>
	);
	return (
		<View style={styles.screen}>
			<FlatList
				horizontal={false}
				style={{ flex: 1, width: '100%' }}
				numColumns={2}
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
			/>
		</View>
	);
};

CategoriesScreen.navigationOptions = ({ navigation }) => ({
	title: 'Categories',
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
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CategoriesScreen;
