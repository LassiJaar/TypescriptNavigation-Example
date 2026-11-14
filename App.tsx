import { PaperProvider } from 'react-native-paper';
import SecondScreen from './screens/SecondScreen';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <PaperProvider>
      <SecondScreen />
    </PaperProvider>
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
