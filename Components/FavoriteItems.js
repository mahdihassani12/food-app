import React from 'react';
import { StyleSheet, Text, View, Image, FlatList,Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function FavoriteItems({ name, price, image }) {
	
	return (
		<View style={styles.container}>
			<Image 
				style={styles.image}
				source={{ uri: image }}
			/>

			<View style={styles.content}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.price}>{price}</Text>
			</View>

			<MaterialCommunityIcons 
				name="delete"
				size={30}
				style={{ alignSelf:'center' }}
			/>

		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		flexDirection: 'row',
		marginBottom: 5,
		borderBottomWidth: 0.1,
		borderBottomColor: '#841584'
	},
	image:{
		width:120,
		height:120
	},
	content:{
		justifyContent:"center",
		marginLeft:10,
		flex:1
	},
	name:{
		color: 'green',
		fontSize:18,
		marginBottom:5
	},
	price:{
		color: 'green',
		fontSize:18,
	}
});