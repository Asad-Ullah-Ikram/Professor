import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export function DropDown() {
  const [pickerValue, setPickerValue] = useState('Gender');

  return (
    <View style={styles.container}>
      <View style={styles.DropdownArea}>
        <Picker
          style={styles.picker}
          selectedValue={pickerValue}
          onValueChange={itemValue => setPickerValue(itemValue)}>
          <Picker.Item label="Gender" value="Gender" />
          <Picker.Item label="male" value="male" />
          <Picker.Item label="female" value="female" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  DropdownArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 80,
    flexDirection: 'row',

    // flexDirection: 'row',
    // marginRight: 10,
    // marginLeft: 10,
  },
  picker: {
    width: 300,
    height: 45,
    borderwidth: 2,
    shadowColor: '#00000',
    backgroundColor: 'white',
  },
});
