import React ,{ useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, 
  TouchableOpacity, Modal, TextInput, Image, Button, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

const Stack = createNativeStackNavigator();


export function Home({ navigation }) {
    const [input, setInput] = useState('') ;
    
    const [door, setDoor] = useState(false);
    
  function verify(){
    if (input === '') {alert('Espaço em branco, inserir nome!!');  return;};

    setDoor(true);

  }
      

    return(
        <View>
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
  
        
  
  </View>

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

