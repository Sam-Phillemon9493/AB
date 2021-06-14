import React, { useState, useRef, useEffect } from 'react';
import { TextInput, Button, Text } from 'react-native-paper';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
// import { Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';


const AuthenticationScreen = ({ navigation, route }) => {
	const { phoneNumber } = route.params;
	const [confirm, setConfirm] = useState(null);
	// const [otpArray, setOTPArray] = useState(['','','','','','','']);
	const [pinError, setPinError] = useState('');

	const [pin1, setPin1] = useState('');
	// const [pin2, setPin2] = useState('');
	// const [pin3, setPin3] = useState('');
	// const [pin4, setPin4] = useState('');
	// const [pin5, setPin5] = useState('');
	// const [pin6, setPin6] = useState('');

	const inputPin1Ref = React.useRef();
	// const inputPin2Ref = React.useRef();
	// const inputPin3Ref = React.useRef();
	// const inputPin4Ref = React.useRef();
	// const inputPin5Ref = React.useRef();
	// const inputPin6Ref = React.useRef();

	useEffect( ( ) => {
		inputPin1Ref.current && inputPin1Ref.current.focus();
		signInWithPhoneNumber();
		console.log('Phone number:', phoneNumber);
	},[]);

	const signInWithPhoneNumber = async () => {
		try{
			const confrimation = await auth().signInWithPhoneNumber(phoneNumber);
			setConfirm(confrimation);
		} catch(e) {
			alert(JSON.stringify(e))
		}
	}
	
	const confrimCode = async () => {
		try{

			const code = pin1;
			console.log('Code is :',code);
			console.log('confirmation code:', confirm);
			const response = await confirm.confirm(code);
			console.log('Response :', confirm.confirm(code));
			if(response) {
				console.log(response);
				navigation.navigate('TabsScreen');
			} else {
				setPinError('Incorrect Pin');
			}
		} catch(e){
			alert(JSON.stringify(e));
		}
	}

   return (
		<View style={{display:"flex", height:"100%", width:"100%", paddingTop: "40%"}}> 
		<KeyboardAvoidingView >
		<Text> {pinError}  </Text>
			<View style={{height: "20%", width: "100%", justifyContent:"space-evenly", flexDirection:"row", alignItems: "center"}}>
				<TextInput 
					ref={inputPin1Ref}
					style={{height: '20%',width:"50%",borderColor:"grey", borderWidth: 1, fontSize: 20, textAlign: "center"}}
					onChangeText={ ( pin1 ) => {
							setPin1(pin1);
						// 	const otpArrayCopy = otpArray.concat();
						// 	otpArrayCopy[0] = pin1;
     	 				// 	setOTPArray(otpArrayCopy);
						// 	if(pin1 != ''){
						// 		inputPin2Ref.current.focus();
						// 	}

						}
					}
					value={pin1}
					maxLength={6}
				/>
				{/* <TextInput 
					ref={inputPin2Ref}
					style={{height: '20%', borderColor:"grey", borderWidth: 1, fontSize: 20, textAlign: "center"}} 
					onChangeText={ ( pin2 ) => {
							setPin2(pin2);
							const otpArrayCopy = otpArray.concat();
							otpArrayCopy[1] = pin2;
     	 					setOTPArray(otpArrayCopy);
							if(pin2 != ''){
								inputPin3Ref.current.focus();
							}

						}
					}
					value={pin2}
					maxLength={1}
				/>
				<TextInput 
					ref={inputPin3Ref}
					style={{height: '20%', borderColor:"grey", borderWidth: 1, fontSize: 20, textAlign: "center"}} 
					onChangeText={ ( pin3 ) => {
							setPin3(pin3);
							const otpArrayCopy = otpArray.concat();
							otpArrayCopy[2] = pin3;
     	 					setOTPArray(otpArrayCopy);
							if(pin3 != ''){
								inputPin4Ref.current.focus();
							}

						}
					}
					value={pin3}
					maxLength={1}
				/>
				<TextInput 
					ref={inputPin4Ref}
					style={{height: '20%', borderColor:"grey", borderWidth: 1, fontSize: 20, textAlign: "center"}} 
					onChangeText={ ( pin4 ) => {
							setPin4(pin4);	
							const otpArrayCopy = otpArray.concat();
							otpArrayCopy[3] = pin4;
     	 					setOTPArray(otpArrayCopy);						
							if(pin4 != ''){
								inputPin5Ref.current.focus();
							}
						}
					}	
					value={pin4}
					maxLength={1}
				/>
				<TextInput 
					ref={inputPin5Ref}
					style={{height: '20%', borderColor:"grey", borderWidth: 1, fontSize: 20, textAlign: "center"}} 
					onChangeText={ ( pin5 ) => {
							setPin5(pin5);		
							const otpArrayCopy = otpArray.concat();
							otpArrayCopy[4] = pin5;
     	 					setOTPArray(otpArrayCopy);					
							if(pin5 != ''){
								inputPin6Ref.current.focus();
							}
						}
					}	
					value={pin5}
					maxLength={1}
				/>
				<TextInput 
					ref={inputPin6Ref}
					style={{height: '20%', borderColor:"grey", borderWidth: 1, fontSize: 20, textAlign: "center"}} 
					onChangeText={ ( pin6 ) => {
							setPin6(pin6);	
							const otpArrayCopy = otpArray.concat();
							otpArrayCopy[5] = pin6;
     	 					setOTPArray(otpArrayCopy);						
							if(pin6 != ''){
								alert('Thank You!')
							} 
						}
					}
					value={pin6}
					maxLength={1}
				/> */}
			</View>
		
		<View style={{display: "flex", justifyContent:"space-evenly", flexDirection:"row", alignItems: "center", height:"50%"}}>			
			<Button
				title="Resend"
				style={{ padding: 3, height: '27%', width:"40%", backgroundColor: "green"}} 
				theme={{ roundness: 3}} 
				mode="contained"
				labelStyle={{textAlign: "center", fontSize: 12}}
				// onPress={() => signInWithPhoneNumber('+919566110627')}
			>
				Resend	
			</Button>
			<Button
				title="Verify"
				style={{ padding: 3, height: '27%', width: '40%', backgroundColor: "green"}} 
				theme={{ roundness: 3}} 
				labelStyle={{textAlign: "center", fontSize: 12}}
				mode="contained"
				onPress={confrimCode}
			>
				Verify	
			</Button>
		</View>
		</KeyboardAvoidingView>
		</View>
   );
}


export default AuthenticationScreen;
