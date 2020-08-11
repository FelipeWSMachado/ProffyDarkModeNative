import React, { useState } from 'react';
import { View, AsyncStorage } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'

import styles from './styles';
import PageHeader from '../../componets/PageHeader';
import TeacherItem, { Teacher } from '../../componets/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';

function Favorites () {
  const [favorites, setFavorites] = useState([]);
  function loadFavorites (){
    AsyncStorage.getItem('favorites').then(response => {
      if (response){
        const favoritedTeachers = JSON.parse(response);
        setFavorites (favoritedTeachers)
       }
    })

  }
  useFocusEffect(() => {
    loadFavorites();
  })
  return (

   
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos"/>
      
      <ScrollView
      style={styles.teacherList}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
        
      }}
      >
        {favorites.map((teacher: Teacher) => {
          return(
            <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited/>
          )
        })}
      </ScrollView>
    </View>
  );
}

export default Favorites;