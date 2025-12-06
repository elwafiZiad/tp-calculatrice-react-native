import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable, Keyboard, Alert } from 'react-native';

export default function App() {
  const [nombre1, setNombre1] = useState('');
  const [nombre2,setNombre2] = useState('');
  const [leResultat, setLeResultat]=useState('');
  const [operateur,setOperateur] = useState(''); 

  function faireLeCalcul(){
    const n1 = parseFloat(nombre1);
  const n2 = parseFloat(nombre2);

    if(isNaN(n1)){
      setLeResultat("Erreur: Il faut mettre un chiffre !");
      return;
    }
    if (isNaN(n2)) {
    setLeResultat("Erreur: Il faut mettre un chiffre !");
      return;
    }

    let total = 0;
    if(operateur=='+'){
      total=n1+n2;
    }
    else if(operateur=='-'){
      total = n1 - n2;
    } else if (operateur == '*') {
       total = n1*n2;
    } else {
      setLeResultat("Erreur: Pas d'opérateur");
       return;
    }
    setLeResultat("Résultat : " + total);
  }

  const effacerTout = () => {
    setNombre1('');
     setNombre2('');
    setOperateur('');
    setLeResultat('');
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize:24, fontWeight:'bold', marginBottom:30, textAlign:'center'}}>
        TP Calculatrice
      </Text>

      <TextInput style={styles.inputBox} placeholder="Entrer nombre 1" keyboardType="numeric"
        value={nombre1} onChangeText={setNombre1} />

      <TextInput
        style={styles.inputBox} placeholder="Entrer nombre 2"
        keyboardType="numeric" value={nombre2}
        onChangeText={setNombre2}
      />

      <View style={styles.boutonsContainer}>
        <Pressable style={[styles.btn, operateur=='+'?{backgroundColor:'blue'}:null]} 
          onPress={()=>setOperateur('+')}>
          <Text style={styles.txtBtn}>+</Text>
        </Pressable>
        <Pressable style={[styles.btn, operateur=='-'?{backgroundColor:'blue'}:null]} 
          onPress={()=>setOperateur('-')}>
          <Text style={styles.txtBtn}>-</Text>
        </Pressable>
        <Pressable style={[styles.btn, operateur=='*'?{backgroundColor:'blue'}:null]} 
        onPress={()=>setOperateur('*')}>
          <Text style={styles.txtBtn}>*</Text>
        </Pressable>
      </View>

      <View style={{marginTop:20,marginBottom:20}}>
        <Button title="Calculer" onPress={faireLeCalcul}/>
      </View>
      <Text style={styles.resultatStyle}>{leResultat}</Text>
      <View style={{marginTop: 10}}>
        <Button title="Clear" color="red" onPress={effacerTout}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5', 
  },
  inputBox:{
    backgroundColor:'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius:5,
    padding:10,
    marginBottom: 15,
    fontSize:16,
  },
  boutonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  btn: {
    width: 50, height: 50,
    backgroundColor: '#ddd',
    justifyContent: 'center', alignItems: 'center',
    borderRadius: 25,
  },
  txtBtn: {
    fontSize: 20, fontWeight: 'bold',
  },
  resultatStyle: {
    fontSize: 20, fontWeight:'bold',
    textAlign: 'center',
    marginBottom: 20, color: 'black'
  }
});