import React from 'react';
import { Header , Icon } from 'react-native-elements';
import { createSwitchNavigator , createAppContainer } from 'react-navigation';

export const MyHeader =(props)=>{
  return(
    <Header
      leftComponent = {
        <Icon name = "arrow-left" type = "font-awesome"
        onPress = {()=>this.props.navigation.navigate ('Start')}
                    
        />
      }    
      centerComponent = {{
        text:props.title,
        style:{color:'black',fontSize:20, fontWeight:'bold'},
      }}
      rightComponent = {
        <Icon name = "home"
        onPress = {()=>this.props.navigation.navigate('Start') }

        />
      }
      backgroundColor = "Red"
    />
  );
};
