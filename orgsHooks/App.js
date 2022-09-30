import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/screens/Home';

function App() {
  return (
    <SafeAreaView style={styles.tela}>
      <Home />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
});
