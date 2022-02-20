import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from '../navigations/AuthStack';
import MainStack from '../navigations/MainStack';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {/* {true ? MainStack(Stack) : AuthStack(Stack)} */}
        {false ? MainStack(Stack) : AuthStack(Stack)}
        {/* <AuthStack /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
