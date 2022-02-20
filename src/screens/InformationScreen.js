import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export function InformationScreen({navigation}) {
  const [pickerValue, setPickerValue] = useState('');

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Information Screen</Text>
      </View>
      <View style={styles.DropdownArea}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            paddingTop: 10,
            // justifyContent: 'space-around',
          }}>
          Select Gender
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={pickerValue}
          onValueChange={itemValue => setPickerValue(itemValue)}>
          <Picker.Item label="male" value="male" />
          <Picker.Item label="female" value="female" />
        </Picker>
      </View>
      <View style={styles.viewBottom}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <View style={styles.btnNext}>
            <Text style={styles.textNext}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  title: {
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20,

    alignSelf: 'center',
  },
  DropdownArea: {
    top: 30,
    flexDirection: 'row',
  },
  picker: {
    width: 150,
    height: 45,
    borderwidth: 2,
    borderColor: 'red',
    backgroundColor: 'white',
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
    backgroundColor: '#244DB7',
  },
  textNext: {
    color: '#ffffff',
    alignItems: 'center',
  },
});
