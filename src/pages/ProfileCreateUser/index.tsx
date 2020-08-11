import React, { useState } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import ImagePicker from 'expo-image-picker'


import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import profileIcon from '../../assets/images/icons/profileIcon.png'
import imagePickerCallback from '../../componets/Utils/HandleImage'

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



import styles from './styles';

function ProfileCreateUser() {
  const [selectImage, setSelectImage] = useState(null); 
  const { navigate } = useNavigation();

  
  function handleNavigateToFinalPage(){
    navigate('Final')
  }
  function handleNavigateToCreateUser2Page(){
    navigate('CreateUser2')
  }
  
  return (
    <View style={styles.container}>
    <ImageBackground resizeMode="contain"
     source={giveClassesBgImage}
      style={styles.content}>
      <Image source={profileIcon} style={styles.checkIcon}/>
      <Text style={styles.description}>
        Tire ou nos envie uma foto bacana! 
      </Text>
      <RectButton  style={styles.okButton}>
        <Text style={styles.okButtonText} onPress={handleNavigateToFinalPage}>Voltar</Text>
      </RectButton>
      <RectButton  style={styles.okButton2} onPress={handleNavigateToFinalPage}>
        <Text style={styles.okButtonText}>Enviar</Text>
      </RectButton>
      </ImageBackground>
  </View>
  );
  }


export default ProfileCreateUser;