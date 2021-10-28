/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const App: () => Node = () => {
  
  return (
    <View>
      <StatusBar barStyle='#222' />
      <ScrollView>
        <Text style={styles.TitolRoig}>Benvinguts a React Native</Text>
        <Text style={styles.AAAA}>ManelPosa'mUn10</Text>
        <Text style={{fontFamily:'normal',fontSize:20}}>Normal</Text>
        <Text style={{fontFamily:'notoserif',fontSize:20}}>Notoserif</Text>
        <Text style={{fontFamily:'sans-serif',fontSize:20}}>Sans-serif</Text>
        <Text style={{fontFamily:'sans-serif-light',fontSize:20}}>Sans-serif-light</Text>
        <Text style={{fontFamily:'sans-serif-thin',fontSize:20}}>Sans-serif-thin</Text>
        <Text style={{fontFamily:'sans-serif-condensed',fontSize:20}}>Sans-serif-condensed</Text>
        <Text style={{fontFamily:'sans-serif-medium',fontSize:20}}>Sans-serif-medium</Text>
        <Text style={{fontFamily:'serif',fontSize:20}}>Serif</Text>
        <Text style={{fontFamily:'monospace',fontSize:20}}>Monospace</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  TitolRoig : {
    color:'red',
    fontSize:24,
  },
  AAAA : {
    color:'blue',
    fontSize:20,
    fontWeight:'bold',
    fontFamily:'Roboto'
  }
});

export default App;
