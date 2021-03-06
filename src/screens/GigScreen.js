import * as React from 'react';
import {Button, View, Text} from 'react-native';

export function GigScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Gig Screen</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}
