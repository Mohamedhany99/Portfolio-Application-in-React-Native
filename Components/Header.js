import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, Image, View } from 'react-native';

export default function Header() {
  return (
      <View style={styles.container}>
        <ImageBackground style={styles.headerbackground} source={require("../assets/backgroundphoto1.jpg")}>
            <View style={styles.header}>
                <View style={styles.profilepicwrapp}>
                    <Image style={styles.profilepic} source={require("../assets/myphoto.jpeg")}/>
                </View>
                
                <Text style={styles.name}> Mohamed Hany</Text>
                <Text style={styles.pos}>Software Engineer</Text>
            </View>

        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  headerbackground:{
    flex:1,
    width:null,
    alignSelf:'stretch'
  },
  header:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:20,
    
  },
  profilepicwrapp:{
    width:170,
    height:170,
    borderRadius:100,
    borderColor:'green',
    borderWidth:6,
    opacity:60,
  },
  profilepic:{
    flex:1,
    width:null,
    alignSelf:'stretch',
    borderRadius:100,
    borderColor:'#fff',
    borderWidth:4
  },
  name:{
    marginTop:20,
    fontSize:16,
    color:'#fff',
    fontWeight:'bold',
  },
  pos:{
    fontSize:14,
    color:'orange',
    fontWeight:'300',
    fontStyle:'italic',
  },
});
