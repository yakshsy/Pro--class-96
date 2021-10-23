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

export default class Venus extends React.Component {
  render() {
    return (
      <View>
        <MyHeader title="Venus" />
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
              source={require('../assets/venus.jpg')}
              style={{ width: 315, height: 300, justifyContent: 'center' }}
            />
            <Text style = { styles.textStyle}>Venus</Text>
            <Text style = {{color : 'aqua'}}>Venus is the Hottest and toxic planet in our solar system.
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