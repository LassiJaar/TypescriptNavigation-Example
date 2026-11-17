import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SecondScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SecondScreen;