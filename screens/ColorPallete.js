import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPallete = ({ route }) => {
  console.log(route.params.colors);
  const { colors, paletteName } = route.params;
  return (
    <FlatList
      data={colors}
      style={{ backgroundColor: 'white' }}
      // if your data already has a key as a string -- key:"2" u dont need keyExtractor
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
      )}
      ListHeaderComponent={<Text style={styles.intro}>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  intro: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});

export default ColorPallete;
