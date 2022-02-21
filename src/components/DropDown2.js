import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export function DropDown2() {
  const [pickerValue, setPickerValue] = useState('Board');

  return (
    <View style={styles.container}>
      <View style={styles.DropdownArea2}>
        <Picker
          style={styles.picker2}
          selectedValue={pickerValue}
          onValueChange={itemValue => setPickerValue(itemValue)}>
          <Picker.Item label="Select Board" value="Select Board" />
          <Picker.Item label="Matric Board" value="Matric Board" />
          <Picker.Item label="Inter Board" value="Inter Board" />
          <Picker.Item label="Agha Khan Board" value="Agha Khan Board" />
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
