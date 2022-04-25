import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, Image, View } from 'react-native';

export default function Bar() {
  return (
      <View style={styles.bar}>
          <View style={[styles.barItems, styles.barseperator]}>
                <Text style={styles.barTop}>12K</Text>
                <Text style={styles.barBottom}>Followers</Text>
          </View>
          <View style={styles.barItems}>
                <Text style={styles.barTop}>12K</Text>
                <Text style={styles.barBottom}>Following</Text>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  bar:{
      marginTop:20,
      borderTopColor:'#fff',
      borderTopWidth:4,
      backgroundColor:'green',
      flexDirection:'row',
  },
  barseperator:{
      borderRightWidth:4
  },
  barItems:{
    flex:1,
    padding:18,
    alignItems:'center',
  },
  barTop:{
      color:'#fff',
      fontSize:16,
      fontWeight:'bold',
      fontStyle:'italic',
  },
  barBottom:{
      color:"#000",
      fontSize:14,
      fontWeight:'bold'
  }

});
