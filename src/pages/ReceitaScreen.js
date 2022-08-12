import React, { useEffect, useState, useLayoutEffect } from "react";
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default ReceitaScreen = () => {

  const nav = useNavigation();

  useLayoutEffect(() => {
    const handleAddButton = () => {
      setInputText(t => {
        setIngredients(i => {
          newI = [...i];
          newI.push(t);
          setIngredients(newI);
        })
      })
    }

    nav.setOptions({
      headerRight: () => <Button title="Adicionar" onPress={handleAddButton} />
    });
  }, []);

  const text = 'Faça um Bolo'
  const [inputText, setInputText] = useState('');
  const [ingredients, setIngredients] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <Text style={styles.h1}>{text}</Text>
        <TextInput style={styles.input}
          value={inputText} onChangeText={setInputText}
          placeholder="Digite um ingrediente"
        />
      </View>

      <FlatList
        data={ingredients}
        renderItem={({ item, index }) => <Text style={styles.listItem}>{item}</Text>}
        keyExtractor={(item, index) => { return index }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  inputArea: {

    alignItems: 'center',
    marginBottom: 20,
  },
  listItem: {

    flex: 1,
    alignItems: 'center',
    marginBottom: 5,
  },
  h1: {
    fontSize: 17,
  },
  input: {

    width: 250,
    padding: 10,
    fontSize: 15,
    backgroundColor: '#BBB'
  },
})
