import React, { useState } from "react";
import { View,Text,StyleSheet,Image, TextInput, ScrollView, Alert } from "react-native";
import withBackground from "../hoc/withBackground";
import Button from "../components/Button";
import auth from '@react-native-firebase/auth';
import SeperatorText from "../components/SeperatorText";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";


const SignupScene = () =>{

    const navigation = useNavigation();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')

    const handleSignup=async() =>{
        try{
            if(email.length>0 && password.length>0){
                const isUserCreated = await auth().createUserWithEmailAndPassword(email,password)
                navigation.dispatch(StackActions.replace('TabNavigator'));
            }
            else{
                Alert.alert("Please enter all data")
            }
            
         }
        catch(err){
            console.log(err)
            setMessage(err.message)
        }
    }

    return(
        <View style={styles.container}>

            <View style={{marginTop:30}}>
                <Text style={styles.title}>Sign up</Text>

                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={(value)=>setEmail(value)} />
                
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={(value)=>setPassword(value)}
                    secureTextEntry={true} />
                
                <Text style={styles.subTitle}>{message}</Text>

                <Button 
                    title="Sign up"
                    style={styles.loginButton}
                    textStyle={styles.loginButtonText}
                    onPress={()=>handleSignup()} />

               
                
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal:16
    },
    image: {
      marginTop:15,
      resizeMode: 'cover',
      width:'100%',
      borderRadius:20
    },
    title:{
        fontSize:24,
        color:'black',
        fontWeight:'bold'
    },
    subTitle:{
        fontSize:12,
        color: 'grey',
        paddingBottom:10

    },
    inputStyle:{
        backgroundColor:'white',
        paddingHorizontal: 10,
        borderRadius: 22,
        shadowColor: 'grey',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation:5,
        marginTop:10,
       
    },
    button:{
        backgroundColor:'white',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 22,
        alignItems: 'center',
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation:5,
        width:'100%',
    },
    buttonText:{
        color: 'grey',
        fontSize: 16,
        fontWeight:'bold',
    },
    loginButton:{
        backgroundColor:'#318CE7',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 22,
        alignItems: 'center',
        
        width:'100%',
    },
    loginButtonText:{
        color: 'white',
        fontSize: 16,
        fontWeight:'bold',
    }
  });


export default withBackground(SignupScene);