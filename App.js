import React from 'react';
import {Provider} from 'react-redux';
import { applyMiddleware,compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers' ;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Recipes } from './src/screens/Recipes';
import Home from './src/screens/Home';
import {DetailMeal} from './src/screens/DetailMeal';
import User from './src/screens/User';
  export default function App() {
    const Stack = createNativeStackNavigator();
    const store = createStore(reducers, compose(applyMiddleware(thunk)));
    return (
      <NavigationContainer>
      <Provider store={store}>
       <Stack.Navigator>
       <Stack.Screen 
        name="Home"
         component={Home}
         options={{headerShown: false}}
         />
         <Stack.Screen  
         name="Recipes"
         options={{headerShown: false}}
         component={Recipes}
         />
         <Stack.Screen  
         name="DetailMeal"
         options={{headerShown: false}}
         component={DetailMeal}
         />
          <Stack.Screen  
           name="User"
           options={{headerShown: false}}
         component={User}
         />
     </Stack.Navigator>
      </Provider >
      </NavigationContainer>

    );
  }