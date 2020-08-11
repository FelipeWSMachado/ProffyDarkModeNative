import React from 'react';
import { View, Text, ImageBackground } from 'react-native';


import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';


function CreateUser() {
  const { navigate } = useNavigation();
  function handleNavigateNextStep(){
    navigate('CreateUser2')
  }

  
  return (
    <View style={styles.container}>
    <ImageBackground resizeMode="contain"
     source={giveClassesBgImage}
      style={styles.content}>
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.description2}>
        Vamos nos cadastrar?
      </Text>
      <Text style={styles.description}>
        para começar, digite seu nome e sobrenome...
      </Text>
      </ImageBackground>
      <Text style={styles.label}> Digite seu nome</Text>
            <TextInput 
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#c1bccc"
            />
            <Text style={styles.label}>Sobrenome</Text>
            <TextInput 
            style={styles.input}
            placeholder="Sobrenome"
            placeholderTextColor="#c1bccc"
            />

      <RectButton  style={styles.okButton} onPress={handleNavigateNextStep}>
        <Text style={styles.okButtonText}>Proximo</Text>
      </RectButton>
  </View>
  );
}

export default CreateUser;