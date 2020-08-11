import React, { useState } from 'react';
import { View, Text, Platform, PickerIOS, PickerIOSBase } from 'react-native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import RNPickerSelect from 'react-native-picker-select'
import AsyncStorage  from '@react-native-community/async-storage'

import api from '../../Services/api';

import styles from './styles';
import PageHeader from '../../componets/PageHeader';
import TeacherItem, { Teacher } from '../../componets/TeacherItem';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList () {
  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setFilterVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');
  const pickerStyle = {
    inputIOS: {
    height: 54,
    backgroundColor:  '#fff',
    borderRadius: 8,    
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
    
    },
    inputAndroid: {
    height: 54,
    backgroundColor:  '#fff',
    borderRadius: 8,
    
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
    },
    placeholderColor: '#c1bccc',
    
    
  };

  function loadFavorites (){
    AsyncStorage.getItem('favorites').then(response => {
      if (response){
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher ) => {
          return teacher.id;
        })
        setFavorites (favoritedTeachersIds)
       }
    })
  }
  useFocusEffect(() => {
    loadFavorites();
  })


  function handleToggleFilterVisible(){
    setFilterVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit (){
    loadFavorites()
    const response = await api.get('classes', {
      params:{
        subject,
        week_day,
        time
      }
    });
    setFilterVisible(false);
    setTeachers(response.data)
  }

  return (

    <View style={styles.container}>
      <PageHeader
       title="Proffys disponiveis"
        headerRigth={ (
          <BorderlessButton onPress={handleToggleFilterVisible}>
            <Feather name="filter" size={20} color="#fff"/>
          </BorderlessButton>
        )}
        >
        { isFiltersVisible && ( <View style={styles.searchForm}>
          <Text style={styles.label}>Materia</Text>
          <RNPickerSelect
                  placeholder={{
                    label: 'Selecione uma materia',
                    value: null,
                    color: 'red',
                  }}
                  style={pickerStyle}
                    onValueChange={text => setSubject(text)}
                    items={[
                      { value: 'Artes', label: 'Artes', },
                      { value: 'Biologia', label: 'Biologia', },
                      { value: 'Ciencias', label: 'Ciencias', },
                      { value: 'Educação Fisica', label: 'Educação Fisica', },
                      { value: 'Geografia', label: 'Geografia', },
                      { value: 'Historia', label: 'Historia', },
                      { value: 'Matematica', label: 'Matematica', }, 
                      { value: 'Portugues', label: 'Portugues', },  
                      { value: 'Quimica', label: 'Quimica', }, 
                    ]}                    
                    />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                  <RNPickerSelect
                  placeholder={{
                    label: 'Selecione um dia da semana',
                    value: null,
                    color: 'red',
                  }}
                  style={pickerStyle}
                    onValueChange={text => setWeek_day(text)}
                    items={[
                      {label: 'Segunda Feira', value: "1"},
                      {label: 'Terça Feira', value: "2"},
                      {label: 'Quarta Feira', value: "3"},
                      {label: 'Quinta Feira', value: "4"},
                      {label: 'Sexta Feira', value: "5"},
                      {label: 'Sabado', value: "6"},
                      {label: 'Domingo', value: "0"},
                    ]}                    
                    />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horario</Text>
                <RNPickerSelect
                  placeholder={{
                    label: 'Selecione um horario',
                    value: null,
                    color: 'red',
                  }}
                  style={pickerStyle}
                    onValueChange={text => setTime(text)}
                    items={[
                      {label: '07:00', value: "07:00"},
                      {label: '08:00', value: "08:00"},
                      {label: '09:00', value: "09:00"},
                      {label: '10:00', value: "10:00"},
                      {label: '11:00', value: "11:00"},
                      {label: '12:00', value: "12:00"},
                      {label: '13:00', value: "13:00"},
                      {label: '14:00', value: "14:00"},
                      {label: '15:00', value: "15:00"},
                      {label: '16:00', value: "16:00"},
                      {label: '17:00', value: "17:00"},
                      {label: '18:00', value: "18:00"},
                      {label: '19:00', value: "19:00"},
                    ]}                    
                    />
              </View>
           </View>
           <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
             <Text style={styles.submitButtonText}>Filtrar</Text>

           </RectButton>
        </View>
        )}
      </PageHeader>
      
      <ScrollView
      style={styles.teacherList}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
        
      }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
          <TeacherItem 
          key={teacher.id}
          teacher={teacher}
          favorited={favorites.includes(teacher.id)}
           />)
        })}
        
      </ScrollView>
    </View>
  );
}

export default TeacherList;