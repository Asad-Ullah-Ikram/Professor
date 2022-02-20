import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthenticationScreen} from '../screens/AuthenticationScreen';
import {InputOtpScreen} from '../screens/InputOtpScreen';
import Dashboard from '../components/Dashboard/Dashboard';
import {VerificationScreen} from '../screens/VerificationScreen';
import {InformationScreen} from '../screens/InformationScreen';
// import {GigScreen} from '../screens/GigScreen';

// const Stack = createNativeStackNavigator();

function AuthStack(Stack) {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Authentication">
    //     <Stack.Screen name="Authentication" component={AuthenticationScreen} />
    //     {/* <Stack.Screen
    //       name="inputOtp"
    //       component={InputOtpScreen}
    //       options={{title: 'Input OTP', headerBackTitle: ''}}
    //     /> */}
    //     {/* <Stack.Screen name="Verification" component={VerificationScreen} /> */}
    //     {/* <Stack.Screen name="Information" component={InformationScreen} />
    //     <Stack.Screen name="Gig" component={GigScreen} />
    //     <Stack.Screen name="Dashboard" component={Dashboard} /> */}
    //   </Stack.Navigator>
    // </NavigationContainer>
    <>
      <Stack.Screen name="Authentication" component={AuthenticationScreen} />
      <Stack.Screen name="inputOtp" component={InputOtpScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </>
  );
}

export default AuthStack;
