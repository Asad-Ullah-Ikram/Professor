import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';

const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Student Dashboard</Text>
      </View>
      <View>
        <Card
          style={styles.CardContainer}
          // onPress={() => navigation.navigate('')}
        >
          <Card.Content>
            <Title style={{color: 'white'}}>Create</Title>
            <Paragraph style={{color: 'white'}}>
              Create Your Gig To Get Best Tutor
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  title: {
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
  CardContainer: {
    marginRight: 9,
    marginTop: 5,
    marginLeft: 9,

    fontWeight: '800',
    fontSize: 20,
    backgroundColor: '#384E78',
  },
});
