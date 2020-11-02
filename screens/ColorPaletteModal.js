import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

// we have access to navigation because our modal is the top level component
const ColorPaletteModal = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (!name) {
      Alert.alert('Please enter a palette name');
    } else {
      const newColorPalette = {
        paletteName: name,
        colors: [],
      };

      // takes us back -- closes the modal
      //   navigation.goBack();
      //   we cant use goback because we want to show what the user has inputted
      navigation.navigate('Home', { newColorPalette });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Name of the palette</Text>
      <TextInput
        placeholder="Palette name"
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 50,
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  marginBottom: 10,
});

export default ColorPaletteModal;
