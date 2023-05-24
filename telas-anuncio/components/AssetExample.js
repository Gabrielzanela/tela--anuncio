import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
 <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.paragraph1}>
       marketspace
      </Text>

      <Text style={styles.paragraph2}>
       Seu espaço de compra e venda
      </Text>
     
       <Text style={styles.paragraph3}>
       Acesse sua conta 
      </Text>
      
      <TextInput style={styles.inputlogin} placeholder="E-mail"/>
       <TextInput style={styles.inputlogin} placeholder="Senha"/>
       
      <TouchableOpacity style={styles.button}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      Ainda não tem acesso?

      <TextInput style={styles.inputlogin} placeholder="Criar uma conta"/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 44,
    backgroundColor: '#f5f5f5',
    flex: 1,
  },

  paragraph1: {
   fontWeight: 'bold',
   fontSize: 24,
  },

  paragraph2: {
    fontSize: 15,
    padding: 10,
    marginBottom: 100,
  },

  logo: {
   margin: 5,
  },

  inputlogin:{
    widht:270,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
  },

button:{
   margin: 15,
  padding: 10,
  textAlign: 'center',
  width: 270,
  borderLeftWidth: 10,
  borderRadius: 10,
  backgroundColor: '#6878c0',
  fontSize: 10
},
});
