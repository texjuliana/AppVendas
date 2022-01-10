import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProdutosList } from './screens/ProdutosList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';

import { Home } from './screens/Home.js';


const Stack = createNativeStackNavigator();


function App() {
  
  return (
          
    <CartProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home}
            options={{
              title: "Lojinha",
              headerStyle: {
                backgroundColor: "#D0571A",
              },
              headerTintColor: "#F0F1F2",
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}

          />
         
          <Stack.Screen name='Produtos' component={ProdutosList} 
          options={({ navigation }) => ({
            title: 'Produtos',
            headerStyle: {
              backgroundColor: "#D0571A",
            },
            headerTintColor: "#F0F1F2",
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Detalhes',
            headerStyle: {
              backgroundColor: "#D0571A",
            },
            headerTintColor: "#F0F1F2",
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'Carrinho',
            headerStyle: {
              backgroundColor: "#D0571A",
            },
            headerTintColor: "#F0F1F2",
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
         
    
  );
}
export default App;