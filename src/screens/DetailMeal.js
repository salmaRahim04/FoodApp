import{ useEffect, useState } from 'react'
import { Text, View,Image, ScrollView ,StyleSheet,Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { getMeals } from '../../actions/recipes';

export const DetailMeal = ({route,navigation}) => { 
const [image,setImage] = useState('https://cdn.dribbble.com/userupload/5299879/file/original-dd5de54e66a368a1fe998140ca12c7f2.jpeg?compress=1&resize=2048x1536')
  const images = [
   {
     src:'https://cdn.dribbble.com/users/1019267/screenshots/16631495/media/1c52a6be10b97f67f88b1f15e3c427ac.jpg?compress=1&resize=1600x1200&vertical=top',id:1
   },
   {
     src:'https://cdn.dribbble.com/userupload/4471363/file/original-626d34594e5abc3458dcdd30dfb46c12.png?compress=1&resize=1504x1128',id:2
    },
    {
      src:'https://cdn.dribbble.com/users/2527679/screenshots/18037077/media/0939969d814afdaa24f3ef595c7b9d7f.jpg?compress=1&resize=1600x1200&vertical=top',id:3
    },
    {
      src:'https://cdn.dribbble.com/users/2417352/screenshots/16024017/media/7ed80e6fb9343313ba401e6188c22a01.jpg?compress=1&resize=1600x1200&vertical=top',id:4
    }
]
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals);
  useEffect(() => {
    dispatch(getMeals());
  }, []);
  const { id } = route.params;
  return(
    <>
     {
      meals.map((meal)=>(
        meal.idIngredient == id? 
       <ScrollView>
         <View key={meal.idIngredient}>
         <Pressable onPress={()=>navigation.navigate('Recipes')}>
         <Text style={{fontSize:20,margin:20}}><Icon name="arrow-left" size={20}/> Back</Text>
         </Pressable>
          <Image
                resizeMode="cover"
                source={{uri:image}}
                style={styles.mainimage}
              />
             <View style={styles.ImageView}>
             {
          images.map((img,index)=>(
            <Pressable onPress={() => { index+1 == img.id && setImage(img.src)}}>
            <Image
            resizeMode="cover"
            source={{uri:img.src}}
            style={styles.images}
          />
           </Pressable>
          )
          
          
          )
         }
             </View>
         <View style={styles.details}>
         <Text style={styles.title}> {meal.strIngredient}</Text>
          <Text style={styles.desc}>Description</Text>
          <Text style={styles.textdesc}>{meal.strDescription}</Text>
         </View>
        </View>
       </ScrollView>
        
        :null
      )
      )
     }
    </>
  )
};

const styles = StyleSheet.create({
  mainimage:{
    width:'90%',
    height:300,
    display:'flex',
    justifyContent:'center',
    alignSelf:'center',
    position: 'relative',
    borderRadius:30,
    marginBottom:20,
  },
  images:{
     width:50,
     height:50,
     borderColor:'#fff',
     borderWidth:4,
     borderRadius:20,
     margin:5,

  },
  ImageView:{
    position: 'absolute',
    backgroundColor:'rgba(255,255,255,0.5)',
    backdropFilter: 'blur(5)',
    top: 100,
    right: 40,
    borderRadius:10,

  },
  details:{
    margin:30,
    borderTopWidth:2,
    paddingTop:30

  },
  title:{
    fontSize:35,
    fontWeight:'bolder',
    marginBottom:20,
   },
   desc:{
    color:'grey',
    fontWeight:'bolder',
    fontSize:20,
    margin:10,


   },
   textdesc:{
      margin:10,
      fontSize:15,
      color:'#A8A8A8'
   }
})