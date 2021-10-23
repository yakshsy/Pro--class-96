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

export default class Earth extends React.Component {
  render() {
    return (
      <View>
        <MyHeader title="Earth" />
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
              source={require('../assets/earth.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style = { styles.textStyle}>Earth</Text>
            <Text style = {{color : 'aqua'}}>Earth is called blue planet because it is coverd with 70% of water.It is the only planet where Humans are living.
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