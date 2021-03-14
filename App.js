
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

import api from './src/services/api';

export default function App() {

  const [cep, setCep] = useState('');
  const [cepUser, setCepUser] = useState(null);
  
  let cepField = null;

  async function buscar(){
    if (!cepField.isValid()){
      alert('Digite um cep válido');
      setCep('');
      return;
    } 

    if(cep == ''){
      alert('Digite um cep para pesquisar');
      setCep('');
      return;
    }
    
    try{
      const response = await api.get(`/${cep}/json/`);
      console.log(response.data);
      setCepUser(response.data);
      Keyboard.dismiss();
    }catch(error){
      console.log('ERROR: ' + error)
    }
    
  }

  function limpar(){
    setCep('');
    setCepUser(null)
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}> Digite o cep desejado </Text>

        <TextInputMask
        style={styles.input}
        placeholder="Ex: 69100081"
        type={'zip-code'}
        value={cep}
        onChangeText={ (texto) => setCep(texto) }
        keyboardType="numeric"    
        ref={(ref) => cepField = ref}
        /> 

      </View>
      
      <View style={styles.areaBtn}>
        <TouchableOpacity 
        style={[styles.botao, {backgroundColor: '#1d75cd'}]}
        onPress={ buscar }
        >
          <Text style={styles.botaoText}> Buscar </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[styles.botao, {backgroundColor: '#cd3e1d'}]}
        onPress={ limpar }
        >
          <Text style={styles.botaoText}> Limpar </Text>
        </TouchableOpacity>
      </View>

      { cepUser && 
        <View style={styles.resultado}>
          <Text style={styles.itemText}> Cep: {cepUser.cep} </Text>
          <Text style={styles.itemText}> Logradouro: {cepUser.logradouro} </Text>
          <Text style={styles.itemText}> Bairro: {cepUser.bairro} </Text>
          <Text style={styles.itemText}> Cidade: {cepUser.localidade} </Text>
          <Text style={styles.itemText}> Estado: {cepUser.uf} </Text>
        </View>
      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#62caf0",
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around'
  },
  botao: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 22,
    color: '#FFF'
  },
  resultado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    fontSize: 22
  }
});
