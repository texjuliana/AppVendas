import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProdutosList } from './screens/ProdutosList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, 
  TouchableOpacity, Modal, TextInput, Image, Button, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import * as Animatable from 'react-native-animatable';


const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

const Stack = createNativeStackNavigator();


export default function App() {

  const [door, setDoor] = useState(false);
  const [input, setInput] = useState('');
  const [image, setImage] = useState(false);
  const [link, setLink] = useState('');
  const [descript, setDescript] = useState('');
  


  function verify(){
    if (input === '') {alert('Espaço em branco, inserir nome!!'); return;};

    setDoor(true);
  }
  
  return (

<SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#FFB6C1' barStyle='light-content' />

     
        <Text style={styles.title}>Loja de livros da Juliana Teixeira</Text>
        
        <TextInput 
        placeholder='Nome do cliente'
        placeholderTextColor='#747474'
        value={input}
        style={styles.input}
        onChangeText={ (texto) => setInput(texto) }
        />

          <TouchableOpacity onPress={verify} style={styles.head}>
            <Ionicons style={{marginLeft: 5, marginRight: 5}}name="ios-add" size={35} color="#fff" />
            <Text style={{color: "#fff"}}>Entrar</Text>
          </TouchableOpacity>

      

     <Modal animationtype='bounceInUp' transparent={false} visible={door} >
       <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor='#171d31' barStyle="ligth-content" /> 
           <Text style={styles.title}>Loja de livros da Juliana Teixeira</Text>
          <Text style={styles.subtitle}> Cliente: {input} </Text>
         
          
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
         
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
         
            
       </SafeAreaView>
     </Modal>
    </SafeAreaView>

   
  );
}


const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  },
  into:{
    height: 480,
    width: 320,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#000',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 2,
    textAlign: 'center',

  },
  input:{
    fontSize:15,
    marginLeft:10,
    marginRight:10,
    marginTop:30,
    backgroundColor:'#ddd',
    padding:9,
    height: 45,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },
  container:{
    flex:1,
    backgroundColor: "#DB7093"
  },
  title:{
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#FFF'
  },
  subtitle:{
    marginTop:10,
    paddingBottom: 10,
    fontSize: 15,
    textAlign: 'center',
    color: '#FFF',
  },
  enter:{
    color: '#FFF',
    fontSize: 20,
    marginLeft: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  head:{
    marginLeft:10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#000',
    alignSelf: 'center',
  }
});