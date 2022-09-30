import React, {useEffect, useState} from 'react';
import {FlatList, Text} from 'react-native';
import {carregaProdutores} from '../../../../servicos/carregaDados';
import {Card} from '../Card/Card';

import {styles} from './styles';

export default function Produtores({topo: Topo}) {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);
  useEffect(() => {
    const retorno = carregaProdutores();
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={styles.titulo}> {titulo} </Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      keyExtractor={({nome}) => nome}
      renderItem={({item}) => <Card {...item} />}
      ListHeaderComponent={TopoLista}
    />
  );
}
