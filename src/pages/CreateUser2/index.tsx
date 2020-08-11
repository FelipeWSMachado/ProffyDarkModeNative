import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'


import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';


function CreateUser2() {
  const [hidePass, setHidePass] = useState(true);
  const [changeEyeIcon, setChangeEyeIcon] = useState("eye");
  function handleShowPass () {
    if (hidePass === true){
    setHidePass(false);
    setChangeEyeIcon ("eye-with-line")
    }else {
    setHidePass(true);
    setChangeEyeIcon ("eye")
    }   
  }
  const { navigate } = useNavigation();
  function handleNavigateToProfileConfigPage(){
    navigate('ProfileCreateUser')
   
  }

  
  return (
    <View style={styles.container}>
    <ImageBackground resizeMode="contain"
     source={giveClassesBgImage}
      style={styles.content}>
      <Text style={styles.title}>Quase pronto</Text>
      <Text style={styles.description}>
        Agora só falta seu email e senha...
      </Text>
      </ImageBackground>
      <Text style={styles.label}> Digite seu email</Text>
            <TextInput 
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#c1bccc"
            />
            
            <Text  style={styles.label} >Digite sua senha</Text>
            <TextInput 
            secureTextEntry={hidePass}
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#c1bccc"                     
             />
            <Icon.Button style={styles.eyeIcon} name={changeEyeIcon} size={20} onPress={handleShowPass}>Mostrar senha</Icon.Button>
            

      <RectButton  style={styles.okButton} onPress={handleNavigateToProfileConfigPage}>
        <Text style={styles.okButtonText}>Finalizar</Text>
      </RectButton>
  </View>
  );
}

export default CreateUser2;