import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const PalettePreview = ({ handlePress, colorPalette }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        //   since paletteName and colors are the same u can just pass in the entire item
        // // {
        //   paletteName: 'Solarized',
        //   colors: SOLARIZED,
        // }
        handlePress();
        // navigation.navigate('ColorPalette', item);
      }}
    >
      <Text style={styles.text}>{colorPalette.paletteName}</Text>
      <FlatList
        style={styles.list}
        //   makes it render horizontally
        horizontal={true}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={[{ backgroundColor: item.hexCode }, styles.box]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    height: 30,
    width: 30,
    marginRight: 10,
    // Box SHADOW
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  list: {
    marginBottom: 20,
    flexDirection: 'row',
  },
});

export default PalettePreview;
