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

export default class Jupiter extends React.Component {
  render() {
    return (
      <View>
        <MyHeader title="Jupiter" />
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
              source={require('../assets/jupiter.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style = { styles.textStyle}>Jupiter</Text>
            <Text style = {{color : 'aqua'}}>Jupiter is having ring around it and it is the biggest planet. 
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