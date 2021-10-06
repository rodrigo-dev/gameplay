import React, {useState} from "react";
import { View,
         Text,
        Image,
      } from 'react-native';
import IllustrationImg from '../../assets/illustration.png';
import { style } from './style';
import {ButtonIcon} from '../../components/Buttonicon/index';

export function SignIn() {

  return (
    <View style={style.container}>
      <Image source={IllustrationImg} style={style.image} resizeMode={"stretch"}/>
    <View style={style.content}>
      <Text style={style.title}>
        Conect-se {'\n'}
        e organize suas {'\n'}
        Jogatinas
      </Text>
      <Text style={style.subtitle}>
        Crie grupos para jogar seus games {'\n'}
        favoritos com seus amigos
      </Text>
      <ButtonIcon title="Entrar com  Discord" activeOpacity={0.7}/>
    </View>
    </View>
    

  );
}
