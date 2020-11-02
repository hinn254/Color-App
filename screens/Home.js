import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  RefreshControl,
  Text,
  TouchableOpacity,
} from 'react-native';
import PalettePreview from '../components/PalettePreview';
// const COLORS = [...];

// Refresh works on scrollable components - track it with state to make it dynamic

const SOLARIZED = [
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
const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
  { paletteName: 'Rainbow', colors: RAINBOW },
];

const Home = ({ navigation, route }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // new color
  // when it loads first its empty so u will make it undefined
  const newColorPalette = route.params
    ? route.params.newColorPalette
    : undefined;
  // const { newColorPalette } = route.params;

  // runs if new color has been added , takes the current pallete list and add it to the beginning
  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes([newColorPalette, ...colorPalettes]);
    }
  }, [newColorPalette]);

  console.log(newColorPalette);
  useEffect(() => {
    console.log('useEffect');
    const fetchData = async () => {
      setIsRefreshing(true);
      let response = await fetch(
        'https://color-palette-api.kadikraman.now.sh/palettes',
      );
      //   setTimeout(async () => {
      //     if (response.ok) {
      //       let resData = await response.json();
      //       setColorPalettes(resData);
      //       setIsRefreshing(false);
      //     }
      //   }, 2000);
      if (response.ok) {
        let resData = await response.json();
        setColorPalettes(resData);
        setIsRefreshing(false);
      }
    };
    fetchData();
  }, []);
  console.log(colorPalettes);

  return (
    //   Flatlist have refresh and onrefresh properties
    <FlatList
      style={styles.list}
      //   this is the hard coded color pallete
      //   data={COLOR_PALETTES}
      //   this is the color pallete from api

      data={colorPalettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          colorPalette={item}
        />
      )}
      //   Flatlist refresh props
      refreshing={isRefreshing}
      onRefresh={() => console.log('I am erfrsed')}
      // This is for refreshing
      //   refreshControl={<RefreshControl refreshing={true} onRefresh={() => {}} />}

      // list header
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => navigation.navigate('ColorPaletteModal')}
        >
          <Text style={styles.buttonText}>Add a color scheme</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'teal',
    marginBottom: 10,
  },
});

export default Home;
