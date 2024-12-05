import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from '@react-native-firebase/auth';

const signInWithGoogle = async()=>{
    try{
        GoogleSignin.configure({
            offlineAccess:false,
            webClientId: '807314155423-74c6mt7kpc3hgbdu8j3b69plhfnvpvrf.apps.googleusercontent.com',
            scopes:['profile','email']
          });
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          const {idToken} = await GoogleSignin.signIn();
          const googleCredential = auth.GoogleAuthProvider.credential(idToken);
          auth().signInWithCredential(googleCredential);
          return user
    }
    catch(err){
        console.log(err)
    }
}

export default signInWithGoogle;