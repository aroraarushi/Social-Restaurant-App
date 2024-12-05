import React, { useState,useEffect } from "react";
import { View,Text,StyleSheet,Image, TextInput, ScrollView, Alert } from "react-native";
import withBackground from "../hoc/withBackground";
import Button from "../components/Button";
import auth from '@react-native-firebase/auth';
import SeperatorText from "../components/SeperatorText";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
import { GoogleSignin } from '@react-native-google-signin/google-signin';




const LoginScene = () =>{

    const navigation = useNavigation();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "244882004925-9c47gai2v4g0h44cg69s91q280fnqqpe.apps.googleusercontent.com",
            offlineAccess: false,
            scopes: ['profile', 'email'],
        });
    }, []);

    const signInWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            await auth().signInWithCredential(googleCredential);
            console.log('User signed in!');
        } catch (error) {
            console.error(error);
        }
    };

    const handleLogin=async() =>{
        try{
            if(email.length>0 && password.length>0){
                const isUserLogin = await auth().signInWithEmailAndPassword(email,password)
                setMessage('')
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
            <Image 
            source={require('../assets/loginimage.jpg')}
            style={styles.image} />
            <ScrollView contentContainerStyle={{paddingBottom:50}} >

            <View style={{marginTop:30}}>
                <Text style={styles.title}>Log in</Text>

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
                    title="Log in"
                    style={styles.loginButton}
                    textStyle={styles.loginButtonText}
                    onPress={()=>handleLogin()} />
                <View style={{marginTop:20}}>
                    <SeperatorText title=" or " />
                </View>
                <View style={{flexDirection:'row',justifyContent: 'space-between',marginTop:20 }}>
                    <Button 
                        title="Google"
                        style={[styles.button,{width:'48%'}]}
                        textStyle={styles.buttonText}
                        onPress={()=>signInWithGoogle()} />
                    
                    <Button 
                        title="Facebook"
                        style={[styles.button,{width:'48%'}]}
                        textStyle={styles.buttonText}
                        onPress={()=>{}} />
                    
                </View>
                <View style={{marginTop:20}}>
                    <Button 
                        title="New here? Sign up"
                        style={styles.button}
                        textStyle={styles.buttonText}
                        onPress={()=>(navigation.navigate('SignupScene'))} />
                </View>
            </View>
            </ScrollView>
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


export default withBackground(LoginScene);