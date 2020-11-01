import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ hexCode, colorName }) => {
  // color depending on hexcode value

  const textColor = {
    //   css color and the value is calculated with the algorithm on the left
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.item, { backgroundColor: hexCode }]}>
      <Text style={[styles.textBox, textColor]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  textBox: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

export default ColorBox;
