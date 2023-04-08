import React from 'react'
import { ImageBackground, StyleSheet,Text ,View,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({navigation}) => {
    const image = {uri: 'https://cdn.dribbble.com/users/143350/screenshots/14052412/media/27ab3785352e64f357bc1608bae74361.png?compress=1&resize=1600x1200&vertical=top'};
  return (
     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
   <View style={styles.View}>
       <Text style={styles.BasedText}>Explore The Beauty Of Our Recipes</Text>
       <Text style={styles.secondText}>Everything you can imagine is here</Text>
           <Pressable style={styles.btn} onPress={()=>navigation.navigate('Recipes') }>
            <View style={styles.icons}>
              <Icon name="angle-right" size={25}  color="#fff"/>
              <Icon name="angle-right" size={25} color="#ccc" />
              <Icon name="angle-right" size={25} color="#E8E8E8" />
            </View>
            <Text style={styles.btnText}>Swipe to Explore Now</Text>
           </Pressable>
    </View>
    </ImageBackground>

  )
}
const styles = StyleSheet.create({

    image: {
      flex: 1,
      backgroundPosition: 'center',
      position:'relative'
    },
    BasedText:{
        fontSize: 45,
        fontWeight: 'bold',
        color:'#5C4033',
    },

    View:{
        backgroundColor: 'rgba(230, 230, 230, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height:' 100%',
        padding:20,
    },
    btn:{
      backgroundColor:'rgba(74, 74, 74, 0.5)',
      backdropFilter: blur(10),
       flex: 2,
      alignItems: 'center',
      justifyContent:'center',
      padding:10,
      borderRadius:20,
      flexDirection: 'row',
      position: 'fixed',
      bottom: 0,
      width:'90%',
      marginBottom:20,
      
    },
    secondText:{
      fontSize:17
    },
    icons:{
      width:60,
      height:60,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#000',
      borderRadius:10,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,

    },
    btnText:{
      color:'#fff',
      marginLeft:20,
      fontSize:17,
    }
    
  });

export default Home