import React, {useEffect, useState} from 'react';
import { View, Text,   FlatList, StyleSheet , SafeAreaView, StatusBar} from 'react-native';

import { Product } from '../components/Product.js';
import { getProdutos } from '../servicos/livros.js';

export function ProdutosList ({navigation, route}) {

  function renderProduct({item: product}) {
    return (
      
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }
  
  const [Produtos, setProdutos] = useState([]);
  
  useEffect(() => {
    setProdutos(getProdutos());
  });
  
  return (
   <SafeAreaView style={styles.container}>
         <StatusBar backgroundColor='#171d31' barStyle="ligth-content" /> 
    <Text style={styles.title}>Loja da Ju</Text>
    <Text style={styles.title}>Bem vindo(a) {route.params.input}</Text>
    <FlatList
      style={styles.ProdutosList}
      contentContainerStyle={styles.ProdutosListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={Produtos}
      renderItem={renderProduct}
    />
    </SafeAreaView>
  
 
  );
}

const styles = StyleSheet.create({
  ProdutosList: {
    backgroundColor: '#eeeeee',
  },
  ProdutosListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
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
  }
});