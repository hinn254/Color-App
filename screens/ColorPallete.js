import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import ColorBox from '../components/ColorBox';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const ColorPallete = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={COLORS}
        style={{ backgroundColor: 'white' }}
        // if your data already has a key as a string -- key:"2" u dont need keyExtractor
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
        )}
        ListHeaderComponent={<Text style={styles.intro}>Solarized colors</Text>}
      />
      {/* <View>
    <Text style={styles.intro}>
      Here are some boxes of different colors
    </Text>
    <ColorBox hexCode="#2aa198" colorName="Cyan" />
    <ColorBox hexCode="#268bd2" colorName="Blue" />
    <ColorBox hexCode="#d33682" colorName="Magenta" />
    <ColorBox hexCode="#cb4b16" colorName="Orange" />
  </View> */}
    </SafeAreaView>
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
