import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';


import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import checkIcon from '../../assets/images/icons/tick.png'

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



import styles from './styles';

function Final() {
  const { navigate } = useNavigation();
  function handleNavigateToLoginPage(){
    navigate('Login')
  }

  
  return (
    <View style={styles.container}>
    <ImageBackground resizeMode="contain"
     source={giveClassesBgImage}
      style={styles.content}>
      <Image source={checkIcon} style={styles.checkIcon}/>
      <Text style={styles.title}>Concluido!</Text>
      <Text style={styles.description}>
        Agora você faz parte da plataforma Proffy
      </Text>
      </ImageBackground>
      <RectButton  style={styles.okButton} onPress={handleNavigateToLoginPage}>
        <Text style={styles.okButtonText}>Finalizar</Text>
      </RectButton>
  </View>
  );
}

export default Final;