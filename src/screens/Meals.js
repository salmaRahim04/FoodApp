import React, {useState } from 'react';
import { View, ScrollView, StyleSheet,Image } from 'react-native';
import { Text } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { Pressable } from 'react-native-web';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const Meals = ({navigation, meals}) => {
 const image = {uri: 'https://cdn.dribbble.com/userupload/5299879/file/original-dd5de54e66a368a1fe998140ca12c7f2.jpeg?compress=1&resize=2048x1536'};
  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / window.width);
    setActiveIndex(index);
  };
  const handleSelectMeal = (mealId) => {
    navigation.navigate('DetailMeal', { id: mealId });
  };
  const savePost = async (post) => {
    try {
      const existingPosts = await AsyncStorage.getItem('savedPosts');
      let newPosts = existingPosts ? JSON.parse(existingPosts) : [];
      newPosts.push(post);
      await AsyncStorage.setItem('savedPosts', JSON.stringify(newPosts));
      alert('Post saved successfully!');
    } catch (e) {
      console.log(e);
      alert('Error saving post.');
    }
  }


  return (
    <>
    <Text style={styles.title}>Best meals to discover</Text>
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      onScroll={handleScroll}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}>
      {meals.slice(0, 20).map((meal, index) => (
       <Pressable onPress={() => { handleSelectMeal(meal.idIngredient); }}>
         <TouchableOpacity  onPress={() => setActiveIndex(index)}>
          <View style={[styles.card, activeIndex === index && styles.activeCard]} key={meal.idIngredient}>
            <View style={styles.container}>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={image}
              />
              <View style={styles.icon}>
              <Icon name='heart'style={styles.iconheart} type='font-awesome' onPress={() => savePost(post)} size={20} color='#fff'  />

              </View>
            </View>
            <Text style={[styles.title,{ textAlign:'center'}]}>{meal.strIngredient}</Text>
          </View>
            
        </TouchableOpacity>
       </Pressable>
      ))}


     
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    position: 'relative',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius:20,

  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: '#808080',
    fontSize: 20,
  },
  iconheart:{
    backgroundColor:'brown',
    padding:10,
    borderRadius:50,
    
  },
  card: {
    width: window.width - 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingBottom: 20,
    margin:20,
    borderRadius:20,
  },
  activeCard: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  title: {
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#FFF',
    fontFamily: 'Trebuchet MS'
  },
});
