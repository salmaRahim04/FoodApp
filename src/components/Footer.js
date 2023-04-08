import React, { useState } from 'react'
import { Text,View,StyleSheet, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';

const Footer = ({navigation}) => {
  console.log(navigation);
  const onPress = () => {
    if (navigation) {
      navigation.navigate('User');
    }
  };
  return (
    <View style={styles.menu}>
         <Icon name="home"   size={20} style={styles.homeIcon}  color="#fff"/>
         <Icon name='navigate' type='ionicon' size={20} color='#808080' />
         <Icon name='save' type='font-awesome' size={20} color='#808080' />
       <Pressable onPress={onPress}>
          <Icon name='user'  type='font-awesome' size={20} color='#808080' />
        </Pressable>

    </View>
  )
}
const styles = StyleSheet.create({
   menu:{
    margin:20,
    flexDirection: 'row',
    justifyContent:'space-around',
    backgroundColor:'#ECDBCC',
   alignItems:'center',
    borderRadius:26,
    padding:15,


   },
   homeIcon:{
    backgroundColor:'#C05E2B',
    padding:10,
    borderRadius:50,
   }
})
export default Footer