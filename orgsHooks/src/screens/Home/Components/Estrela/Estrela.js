import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import estrela from '../../../../assets/estrela.png';
import estrelaCinza from '../../../../assets/estrelaCinza.png';

export function Estrela({
  onPress,
  desabilitada = true,
  preenchida,
  grande = false,
}) {
  const estilos = estilosFuncao(grande);

  const getImage = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza;
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={desabilitada}>
      <Image style={estilos.estrela} source={getImage()} />
    </TouchableOpacity>
  );
}
const estilosFuncao = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
