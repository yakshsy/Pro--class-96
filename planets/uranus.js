import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MyHeader } from '../components/header';

export default class Uranus extends React.Component {
  render() {
    return (
      <View>
        <MyHeader title="Uranus" />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignitems: 'center',
          }}>
          <ImageBackground
            source={require('../assets/starry.jpg')}
            style={{
              flex: 1,
              resizeMode: 'cover',
              justifyContent: 'center',
              width: '100%',
              height: 700,
            }}>
            <Image
              source={require('../assets/uranus.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style = { styles.textStyle}>Uranus</Text>
            <Text style = {{color : 'aqua'}}>Uranus it is also called outter planet
            </Text>
          </ImageBackground>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign : 'center',
    color : 'aqua'
  },
});