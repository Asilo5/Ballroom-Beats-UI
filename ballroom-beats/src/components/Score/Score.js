import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Score = () => {
  return ( 
    <View style={styles.container}>
      <Text>Score</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Score;