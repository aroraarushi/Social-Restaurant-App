import React from "react";
import { View,Text, Image,StyleSheet } from "react-native";
import withBackground from "../hoc/withBackground";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import { StackActions } from "@react-navigation/native";


const HomeScene=()=>{

    const navigation = useNavigation();
   

    return(
        <View style={styles.container}>
            

            <View style={{alignItems:'center',marginTop:'30%'}}>
                <Text style={styles.title}>Email:{auth().currentUser.email}</Text>
                <Text style={styles.subTitle}>UID:{auth().currentUser.uid}</Text>

                <Button 
                        title="Logout"
                        style={styles.button}
                        textStyle={styles.buttonText}
                        onPress={async()=>{
                            await auth().signOut();
                            navigation.dispatch(StackActions.replace('Login'))
                            }} />
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    image: {
      marginTop:'40%',
      resizeMode: 'contain',
      
    },
    title:{
        fontSize:24,
        color:'black',
        fontWeight:'bold'
    },
    subTitle:{
        fontSize:14,
        color: 'black',

    },
    button:{
        backgroundColor:'#318CE7',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 22,
        alignItems: 'center',
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation:5,
        width:145,
        marginTop:50
    },
    buttonText:{
        color: 'white',
        fontSize: 16,
        fontWeight:'bold',
    }
  });

export default withBackground(HomeScene);