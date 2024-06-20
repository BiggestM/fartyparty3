import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Dashboard />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
