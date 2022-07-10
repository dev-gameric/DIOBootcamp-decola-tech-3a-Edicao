import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const App = () => {

  const [toggle, setToggle] = useState(false);

  const trocarEstados = () => setToggle(toggleAntigo => !toggleAntigo);
  return ( 
  <View style={toggle ? style.containerLight : style.containerDark}>
    <TouchableOpacity onPress={trocarEstados}>
      <Image 
        style={toggle ? style.lightMode : style.darkMode} 
        source={
          toggle 
          ? require('./assets/imagens/eco-light.png') 
          : require('./assets/imagens/eco-light-off.png')} />
      <Image 
        style={style.logoDIO} 
        source={
        toggle 
          ? require('./assets/imagens/logo-dio.png') 
          : require('./assets/imagens/logo-dio-white.png')} />
    </TouchableOpacity>
  </View>
  )
};

const style = StyleSheet.create ({
  containerDark: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
  },

  containerLight: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },

  lightMode: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },

  darkMode: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },

  logoDIO: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});

export default App;