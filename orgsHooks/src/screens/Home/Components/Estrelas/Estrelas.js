import React, {useState} from 'react';
import {View} from 'react-native';
import {Estrela} from '../Estrela/Estrela';
import {styles} from './styles';

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, SetQuantidade] = useState(quantidadeAntiga);

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <Estrela
          key={i}
          onPress={() => SetQuantidade(i + 1)}
          desabilitada={!editavel}
          preenchida={i < quantidade}
          grande={grande}
        />,
      );
    }
    return listaEstrelas;
  };
  return (
    <View style={styles.estrelas}>
      <RenderEstrelas />
    </View>
  );
}
