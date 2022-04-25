import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, Image, View } from 'react-native';
import { Dimensions } from 'react-native-web';

export default function PhotoGrid() {
  return (
      <View style={styles.bar}>
          <ScrollView>
              <View style={styles.photogrid}>
                <View style={styles.photowrapp}>
                    <Image style={styles.photo} source={require("../assets/myphoto.jpeg")}/>
                </View>
                <View style={styles.photowrapp}>
                    <Image style={styles.photo} source={require("../assets/newphoto.jpg")}/>
                </View>
                
              </View>
          </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  photogrid:{
      flexDirection:'row',
      flexWrap:'wrap',
  },
  photowrapp:{
      margin:2,
      height:200,
      width:(Dimensions.get('window').width/2)*4,
  },
  photo:{
      flex:1,
      width:Dimensions.get('window').width,
      
      margin:10,
      alignSelf:'center',
  }

});
