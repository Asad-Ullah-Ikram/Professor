import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {DropDown} from '../components/DropDown';
import {DropDown2} from '../components/DropDown2';
import {DropDown3} from '../components/DropDown3';
import {DropDown4} from '../components/DropDown4';

export function InformationScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Information Screen</Text>
      </View>
      <View>
        <DropDown />
        <DropDown2 />
        <DropDown3 />
        {/* <DropDown4 /> */}
      </View>

      {/* <View>
        <DropDown2 />
      </View> */}

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
