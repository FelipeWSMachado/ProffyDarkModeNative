import React from 'react';
import ImagePicker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import styles from '../../pages/Landing/styles';
const { navigate } = useNavigation();



export default function  imagePickerCallback(){
      const openImagePickerAsync = async () => {
      const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("Permission to access camera roll is required!");
        return;
      }
  
      const pickerResult = await ImagePicker.launchImageLibraryAsync();
      console.log(pickerResult);
    }
    return (
    
      openImagePickerAsync
      
    );
  }
