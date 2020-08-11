import firebase from 'expo-firebase-app';
import 'expo-firebase-database';
import auth from '@react-native-firebase/auth';
import * as Facebook from 'expo-facebook';
import { Alert } from 'react-native';

firebase.database();



async function signInAsync() {
  try {
    // Setup the app
    await Facebook.initializeAsync('YOUR_ID')

    // Open the Facebook redirect...
    const {
      type,
      token,
    } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });

    if (type === 'success') {
      // create a new firebase credential with the token
      const credential = auth.FacebookAuthProvider.credential(token);
      // login with credential
      await auth().signInWithCredential(credential);
      // Get the user's name using Facebook's Graph API
      // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
    } else {
      // type === 'cancel'
      // The user cancelled, usually you'll do nothing but sometimes you might want to post this to your analytics
    }
  } catch ({ message }) {
    Alert.alert(message);
  }
}