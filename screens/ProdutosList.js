import React, {useEffect, useState} from 'react';
import { View, Text,   FlatList, StyleSheet } from 'react-native';

import { Product } from '../components/Product.js';
import { getProdutos } from '../servicos/livros.js';

export function ProdutosList ({navigation}) {

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
    
    <FlatList
      style={styles.ProdutosList}
      contentContainerStyle={styles.ProdutosListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={Produtos}
      renderItem={renderProduct}
    />
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
});