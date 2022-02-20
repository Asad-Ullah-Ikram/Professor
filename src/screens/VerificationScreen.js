import React, {useState} from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

export function VerificationScreen({navigation}) {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.container}>
      <View styles={{flex: 1}}>
        <Text style={styles.title}>Verification Screen</Text>
      </View>
      <View style={{padding: 20}}>
        <TextInput
          mode="outlined"
          label="Name"
          placeholder="Enter Name"
          right={<TextInput.Affix />}
        />
        <TextInput
          mode="outlined"
          label="Email"
          placeholder="Enter Email"
          right={<TextInput.Affix />}
        />
        <TextInput
          mode="outlined"
          label="Address"
          placeholder="Enter Address"
          right={<TextInput.Affix />}
        />
      </View>
      <View style={styles.viewBottom}>
        <TouchableOpacity onPress={() => navigation.navigate('Information')}>
          <View style={styles.btnNext}>
            <Text style={styles.textNext}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  viewBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    alignItems: 'center',
  },
  btnNext: {
    width: 150,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#384E78',
  },
  textNext: {
    color: '#ffffff',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
