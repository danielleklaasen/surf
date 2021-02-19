import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';

export default function App() {
  return (
    <Container style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
