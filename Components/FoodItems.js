import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function FoodItems({name, image, price}) {

  return (
    <View style={styles.container}>
     	<Image
     		style={styles.images} 
     		source={{ uri: image }} />

     	<View style={{ alignItems:'center' }}>
     		<Text style={{ fontWeight:'bold' }}>{name}</Text>	
     		<Text>{price}</Text>
     	</View>	
     		
    </View>
  );
}

const styles = StyleSheet.create({
	container:{
		flex:1
	},
	images:{
		width:100,
		height:100,
		borderTopLeftRadius:15,
		borderBottomRightRadius:15,
		margin:10
	}
});
