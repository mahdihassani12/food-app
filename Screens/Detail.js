import React from 'react';
import { StyleSheet, Text, View, Image, FlatList,Button } from 'react-native';

import {Rating} from 'react-native-ratings';
import { useRoute } from '@react-navigation/native';

export default function Detail() {

	const data = useRoute().params
	const {image, name, price, detail} = data

	return (
		<View style={{ flex:1 }}>
			<Image 
				style ={{ height: 120 }}
				source={{ uri: image }}
			/>

			<View>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.title}>Price: {price}</Text>
				<Rating 
					showRating
					imageSize={30}
				/>
			</View>

			<View style={{ margin: 8 }}> 
				<Text style={styles.title}>Introduction</Text>
				<Text>{detail}</Text>
			</View>

			<Button title="Add to favorite" color="#777"/>
		</View>
	);
}

const styles = StyleSheet.create({
  title:{
  	fontWeight: 'bold',
  	textAlign: 'center',
  	marginTop: 10
  }
});