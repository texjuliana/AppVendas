import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProdutosList } from './screens/ProdutosList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';


import { Home } from './src/Home/Home.js';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
          
    <CartProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home}
            options={{
              title: "Loja da ju",
              headerTitleStyle: styles.headerTitle
            }}
          />
         
          <Stack.Screen name='Produtos' component={ProdutosList} 
          options={({ navigation }) => ({
            title: 'Produtos',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Detalhes',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'Carrinho',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
         
    
  );
}


const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});

