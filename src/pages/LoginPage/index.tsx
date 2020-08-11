import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import styles from './styles';
import api from '../../Services/api';


function Login() {

  const [name, setName] = useState('');
  const [passWord, setpassWord] = useState('');
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

  async function handleLoginSubmit (){
        const response = {
          params: {
          name, 
          passWord,
        }};
       console.log(response);    
  }
  const { navigate } = useNavigation();
  function handleNavigateToCreateUserPages(){
    navigate('CreateUser')
  }
  function temp(){
    navigate('Landing')
  }
  
  return (
    <View style={styles.container}>
    <ImageBackground resizeMode="contain"
     source={giveClassesBgImage}
      style={styles.content}>
      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.description}>
        Para começar, você precisa se cadastrar ou efetuar o login. 
      </Text>
      </ImageBackground>
      <Text style={styles.label}>Email</Text>
            <TextInput 
            style={styles.input}
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Email"
            placeholderTextColor="#c1bccc"
            />
            <Text>Esqueceu a senha?</Text>
            <Text style={styles.label}>Senha</Text>
            <TextInput 
            style={styles.input}
            value={passWord}
            onChangeText={text => setpassWord(text)}
            placeholder="Senha"
            secureTextEntry={hidePass}
            placeholderTextColor="#c1bccc"
            />
            <Icon.Button style={styles.eyeIcon} name={changeEyeIcon} size={20} onPress={handleShowPass}>Mostrar senha</Icon.Button>

      <RectButton  style={styles.okButton} onPress={temp}>
        <Text style={styles.okButtonText}>Logar</Text>
      </RectButton>
      <RectButton  style={styles.okButton}onPress={handleNavigateToCreateUserPages}>
        <Text style={styles.okButtonText2}>Criar conta</Text>
      </RectButton>
  </View>
  );
}

export default Login;