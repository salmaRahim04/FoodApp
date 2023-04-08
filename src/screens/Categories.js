import React, {useState } from 'react';
import { useDispatch} from 'react-redux';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Categories = ({recipes}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / window.width);
    setActiveIndex(index);
  };

  return (
    <>
    <Text style={styles.title}>Popular Categories</Text>
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      onScroll={handleScroll}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      {recipes.map((recipe, index) => (
        <TouchableOpacity key={recipe.idCategory} onPress={() => setActiveIndex(index)}>
          <Card style={[styles.card, activeIndex === index && styles.activeCard]}>
            <View>
              <Image
                style={styles.image}
                resizeMode="cover"
                source={{ uri: recipe.strCategoryThumb }}
              />
              <Text style={styles.title}>{recipe.strCategory}</Text>
            </View>
          </Card>
        </TouchableOpacity>
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
  card: {
    width: window.width - 40,
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  activeCard: {
    borderColor: '#007AFF',
    borderWidth: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor:'#FFF'
  },
});

