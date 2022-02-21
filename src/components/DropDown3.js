import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export function DropDown3() {
  const [pickerValue, setPickerValue] = useState('Board');

  return (
    <View style={styles.container}>
      <View style={styles.DropdownArea2}>
        <Picker
          style={styles.picker2}
          selectedValue={pickerValue}
          onValueChange={itemValue => setPickerValue(itemValue)}>
          <Picker.Item label="Select Area" value="Select Area" />
          <Picker.Item label="Jauhar" value="Jauhar" />
          <Picker.Item label="Gulshan" value="Gulshan" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  DropdownArea2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 80,
    flexDirection: 'row',
    marginTop: 70,

    // flexDirection: 'row',
    // marginRight: 10,
    // marginLeft: 10,
  },
  picker2: {
    width: 300,
    height: 45,
    borderwidth: 2,
    shadowColor: '#00000',
    backgroundColor: 'white',
  },
});
