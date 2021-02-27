import React from 'react';
import {
	View,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
} from 'react-native';
import BodyText from './BodyText';
interface props {
	image: string;
	title: string;
	duration: number;
	affordability: string;
	complexity: string;
  onMealSelect: () => void
}
const MealItem: React.FC<props> = ({
	image,
	title,
	duration,
	affordability,
	complexity,
  onMealSelect
}) => {
	return (
		<View style={styles.mealItem}>
			<TouchableOpacity onPress={onMealSelect}>
				<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
					<ImageBackground source={{ uri: image }} style={styles.imageBg}>
						<View style={styles.titleContainer}>
							<BodyText style={styles.title}>{title}</BodyText>
						</View>
					</ImageBackground>
				</View>
				<View style={{ ...styles.mealRow, ...styles.mealFooter }}>
					<BodyText>{duration}</BodyText>
					<BodyText>{complexity}</BodyText>
					<BodyText>{affordability}</BodyText>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	mealItem: {
		width: '100%',
		height: 200,
		borderRadius: 20,
		overflow: 'hidden',
    backgroundColor: '#ccc',
    marginTop: 10,
	},
	titleContainer: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		paddingHorizontal: 10,
		paddingVertical: 5,
    width: '100%',
    alignItems: 'center'
	},
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		color: 'white',
	},
	mealRow: {
		flexDirection: 'row',
	},
	mealHeader: {
		height: '85%',
    
	},
	mealFooter: {
		height: '15%',
		justifyContent: 'space-between',
    paddingHorizontal: 10
	},
	imageBg: {
		width: '100%',
		height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
	},
});

export default MealItem;
