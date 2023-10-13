import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    nacionalidad: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Aquí puedes realizar cualquier acción con los datos del formulario, como enviarlos a un servidor.
    
    console.log(formData);
  };

  return (
    <View style={styles.container}>
      <Text>Nombre:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('nombre', value)}
        value={formData.nombre}
      />

      <Text>Edad:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('edad', value)}
        value={formData.edad}
        keyboardType="numeric"
      />

      <Text>Nacionalidad:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(value) => handleInputChange('nacionalidad', value)}
        value={formData.nacionalidad}
      />

      <Pressable title="Enviar" onPress={handleSubmit} style = {styles.button} color="#007AFF">
        <Text>Enviar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    button: {
        marginTop: 20, // Añade margen superior al botón
        backgroundColor: 'blue', // Cambia el color de fondo del botón
      },
  });