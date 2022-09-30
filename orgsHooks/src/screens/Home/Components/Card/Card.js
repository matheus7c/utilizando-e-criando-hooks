import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Estrelas from '../Estrelas/Estrelas';

import {styles} from './styles';

export function Card({nome, imagem, distancia, estrelas}) {
  const [selecionado, setSelecionado] = useState(false);

  return (
    <TouchableOpacity
      style={styles.cartao}
      onPress={() => setSelecionado(!selecionado)}>
      <Image style={styles.imagem} source={imagem} />
      <View style={styles.informacoes}>
        <View>
          <Text style={styles.nome}> {nome} </Text>
          <Estrelas
            quantidade={estrelas}
            editavel={selecionado}
            grande={selecionado}
          />
        </View>
        <Text style={styles.distancia}> {distancia} </Text>
      </View>
    </TouchableOpacity>
  );
}
