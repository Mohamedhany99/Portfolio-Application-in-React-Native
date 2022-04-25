import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Components/Header"
import Bar from "./Components/Bar"
import PhotoGrid from "./Components/photoGrid"

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Bar/>
      <PhotoGrid/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"black",
  },
});
