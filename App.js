import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, 
  TouchableOpacity, Modal, TextInput, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import * as Animatable from 'react-native-animatable';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

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
  function one(){
    setImage(true);
    setLink(require('./src/images/img1.jpg'));
    setDescript('Livro o senhor dos aneis: Volume unico - Valor R$120,00 - Pagamento em 1x de R$120,00');
  }
  function two(){
    setImage(true);
    setLink(require('./src/images/img2.jpg'));
    setDescript('Box Game Of Thrones: Cronicas de fogo e gelo - Valor R$299,00 - Pagamento em 1x de R$299,00');
  }
  function three(){
    setImage(true);
    setLink(require('./src/images/img3.jpg'));
    setDescript('Box Harry Potter: Com capas originais - Valor R$300,00 - Pagamento em 1x de R300,00');
  }
  function four(){
    setImage(true);
    setLink(require('./src/images/img4.jpg'));
    setDescript('Kit 9 livros: Serie os Bridgertons- Valor R$359,00 - Pagamento em 1x de R$359,00');
  }
  function five(){
    setImage(true);
    setLink(require('./src/images/img5.jpg'));
    setDescript('Coleção livros Stephen king: 8 livros- Valor R$500,00 - Pagamento em 1x de R$500,00');
  }
  function liu(){
    setImage(true);
    setLink(require('./src/images/img6.jpg'));
    setDescript('Livro Box As Mil E Uma Noites Caixa Antoine Galland 2 Livros - Valor R$89,00 - Pagamento em 1x de R$89,00');
  }
  function seven(){
    setImage(true);
    setLink(require('./src/images/img7.jpg'));
    setDescript('O pequeno principe- Valor R$99,00 - Pagamento em 1x de R$99,00');
  }
  function eigth(){
    setImage(true);
    setLink(require('./src/images/img8.jpg'));
    setDescript('Viagem ao centro da terra- Valor R$15,00 - Pagamento em 1x de R$15,00');
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#FFB6C1' barStyle='light-content' />

     
        <Text style={styles.title}>Loja da Juliana Teixeira</Text>
        
        <TextInput 
        placeholder='Nome do cliente'
        placeholderTextColor='#747474'
        value={input}
        style={styles.input}
        onChangeText={ (texto) => setInput(texto) }
        />

          <TouchableOpacity onPress={verify} style={styles.head}>
            <Ionicons style={{marginLeft: 5, marginRight: 5}}name="add" size={60} color="#000000" />
            <Text style={{color: "#000000"}}>Entrar</Text>
          </TouchableOpacity>

      

     <Modal animationtype='bounceInUp' transparent={false} visible={door} >
       <SafeAreaView style={styles.container}>
        
           <Text style={styles.title}>Loja da Juliana Teixeira</Text>
          <Text style={styles.title}></Text>
         
         <View style={styles.images}>
         <TouchableOpacity onPress={one}><Image  source={require('./src/images/img1.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={two}><Image  source={require('./src/images/img2.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={three}><Image  source={require('./src/images/img3.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={four}><Image  source={require('./src/images/img4.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={five}><Image  source={require('./src/images/img5.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={liu}><Image  source={require('./src/images/img6.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={seven}><Image  source={require('./src/images/img7.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
         <TouchableOpacity onPress={eigth}><Image  source={require('./src/images/img8.jpg')} style={{height: 150, width: 150, flexDirection: 'row'}} /></TouchableOpacity>
        
          </View>
            
       </SafeAreaView>
     </Modal>

     <Modal animationtype='bounceInUp' transparent={false} visible={image} style={{backgroundColor: '#000'}}>
       
       <TouchableOpacity onPress={ () => setImage(false) }>
         <Ionicons style={{marginLeft: 5, marginRight: 5}}name="arrow-black" size={60} color="#DDD" />
       </TouchableOpacity>
       <Image source={link} style={styles.into} />
       <Text style={{textAlign:'center'}}>{descript}</Text>
       
      
     </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  images:{
    height: 460,
    width: 320,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#000',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 7,
    padding: 2,
  },
  into:{
    height: 460,
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
    backgroundColor: "#DDA0DD"
  },
  title:{
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#000000'
  },
  subtitle:{
    marginTop:10,
    paddingBottom: 10,
    fontSize: 15,
    textAlign: 'center',
    color: '#000000',
  },
  enter:{
    color: '#DDD',
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
    color: '#000000',
    alignSelf: 'center',
  }
})