import React,{useEffect,useState} from "react";
import { View,Text, Image,StyleSheet } from "react-native";
import withBackground from "../hoc/withBackground";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import { StackActions } from "@react-navigation/native";
import { useSelector } from "react-redux";

const WelcomeScreen = () => {
  const { colors } = useSelector((state) => state.theme); 
  const navigation = useNavigation();
  const [isUserLogin, setIsUserLogin] = useState(false);


  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      const routeName = user ? "HomeScene" : "LoginScene";
      navigation.dispatch(StackActions.replace(routeName));
    });

    return unsubscribe;
  }, [navigation]);

  
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/welcomeimage.jpg")}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>SocialEats</Text>
        <Text style={styles.subTitle}>Discover new flavours together</Text>
        <Button
          title="Join Now"
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

const createStyles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: colors.background,
    },
    image: {
      marginTop: "40%",
      resizeMode: "contain",
    },
    content: {
      alignItems: "center",
      marginTop: "30%",
    },
    title: {
      fontSize: 24,
      color: colors.text,
      fontWeight: "bold",
    },
    subTitle: {
      fontSize: 14,
      color: colors.textSecondary, 
    },
    button: {
      backgroundColor: colors.buttonBackground || "white", // Use theme color or default
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 22,
      alignItems: "center",
      shadowColor: colors.buttonShadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
      width: 145,
      marginTop: 50,
    },
    buttonText: {
      color: colors.buttonText || "grey", // Use theme color or default
      fontSize: 16,
      fontWeight: "bold",
    },
  });

export default withBackground(WelcomeScreen);
