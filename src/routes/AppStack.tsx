import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Landing from '../pages/Landing'
import Login from '../pages/LoginPage'
import ProfileCreateUser from '../pages/ProfileCreateUser'
import CreateUser from '../pages/CreateUser'
import CreateUser2 from '../pages/CreateUser2'
import Final from '../pages/FinalCreateUser'
import GiveClasses from '../pages/GiveClasses'
import StudyTabs from './StudyTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack(){
  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown:false }}> 
        <Screen name="Login" component={Login}/>
        <Screen name="CreateUser" component={CreateUser}/>
        <Screen name="CreateUser2" component={CreateUser2}/>
        <Screen name="ProfileCreateUser" component={ProfileCreateUser}/>        
        <Screen name="Final" component={Final}/>
        <Screen name="Landing" component={Landing}/>
        <Screen name="GiveClasses" component={GiveClasses}/>
        <Screen name="Study" component={StudyTabs}/>
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack;