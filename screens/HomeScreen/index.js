import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import {  Button } from 'react-native-paper';

const HomeScreen = () => {
   return(
	<View >
			<View style={{ alignItems: "center", justifyContent: "center", paddingTop: '20%'}}>
				<Text style={ { fontWeight: 'bold', fontSize: 30, padding: 20 } } > 
					 Hi Sam 
				</Text>
				<Text style={ { fontWeight: 'bold', fontSize: 20, padding: 20 } } > 
					Your last Excercise was on Date with 8/10 score.
				</Text>		
				<Text style={ { fontWeight: 'bold', fontSize: 20, padding: 20 } } > 
					Lets get Started... 
				</Text>
			</View>
			<View style={{ alignItems: "center", justifyContent: "center", paddingTop: 20}}>
				<Button 
					mode="contained" 
					onPress={() => console.log('Pressed')} 
					style={{ height: '33%',  }} 
					labelStyle={{ justifyContent: "center" }} 
				>
			   	Worksheet
   			</Button>
			</View>
	</View>
   );
}

export default HomeScreen;