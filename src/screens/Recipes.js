import {useState,useEffect} from 'react';
import { View,StyleSheet } from 'react-native';
import { SearchBar,Icon } from 'react-native-elements';
import {useDispatch, useSelector } from 'react-redux';
import { getMeals, getRecipes } from '../../actions/recipes';
import Footer from '../components/footer';
import { Categories } from './Categories';
import { Meals } from './Meals';


export const Recipes = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals);
  const recipes = useSelector((state) => state.recipes);
  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  // Filter meals and recipes based on search query
  const filteredMeals = meals.filter(
    (meal) =>
      meal.strIngredient.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.strCategory.toLowerCase().includes(searchQuery.toLowerCase())
  );
  useEffect(() => {
    dispatch(getMeals());
    dispatch(getRecipes());

  }, []);
  return (
    <>
    {meals.length >0 || recipes.length > 0?
      <View style={styles.view}>
      <SearchBar
             placeholder="Search..."
             onChangeText={setSearchQuery}
             value={searchQuery}
             containerStyle={styles.searchBarContainer}
             inputContainerStyle={styles.searchBarInputContainer}
             inputStyle={styles.searchBarInput}
             round
             searchIcon={{ size: 24, color: '#999' }}
             clearIcon={{ color: '#999' }}
             placeholderTextColor="#999"
           />
          <View>
          <Meals navigation={navigation} meals={filteredMeals}/>
          </View>
          <View>
          <Categories recipes={filteredRecipes}/>
          </View>
        <Footer navigation={navigation}/>
         </View>
    :<View style={styles.icon}>
      <Icon
    type={refreshing ? 'material-community' : 'ionicon'}
    name={refreshing ? 'refresh' : 'ios-refresh'}
    onPress={handleRefresh}
    size={50}
  />
    </View> }
    </>
  );
};
const styles = StyleSheet.create({
  view:{
   backgroundColor:'#fff',
  },
  icon:{
    fontSize:30,
    display:'flex',
    flex:1,
    justifyContent:'center',
    alignContent:'center',

  },
  searchBarContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    
  },
  searchBarInputContainer: {
    backgroundColor: '#fff',
  },
  searchBarInput: {
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
    placeholderTextColor: '#999',
  },

})