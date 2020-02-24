import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const SongPlayer = () => {
  return (
    <View style={styles.container}>
      <Text>Song Player</Text>
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

export default SongPlayer;