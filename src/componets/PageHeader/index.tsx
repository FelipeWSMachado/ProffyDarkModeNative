import React, { ReactNode } from 'react';

import styles from './styles';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'

import backIcon from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';

interface PageHeaderProps {
  title: string;
  headerRigth?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, children, headerRigth}) =>  {
  const { navigate } = useNavigation();
  function handleGoBack (){
    navigate('Login');
  }
  return (
  <View style={styles.container}>
    <View style={styles.topBar}>
    <BorderlessButton onPress={handleGoBack}>
      <Image source={backIcon} resizeMode="contain"/>
    </BorderlessButton>
    <Image source={logoImage} resizeMode="contain"/>
    <Ionicons name="ios-cart" size={24} color={'#fff'} onPress={handleGoBack}/>
     </View>
     <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
          {headerRigth}
          </View>
          {children}
     </View>
  
    );}

export default PageHeader;