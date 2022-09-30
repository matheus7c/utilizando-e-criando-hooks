import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import logo from '../../../../assets/logo.png';
import {carregaTopo} from '../../../../servicos/carregaDados';
import {styles} from './styles';

export default function Topo() {
  const [topo, setTopo] = useState('');
  const [legenda, setLegenda] = useState('');
  useEffect(() => {
    const retorno = carregaTopo();
    setTopo(retorno.boas_vindas);
    setLegenda(retorno.legenda);
  }, []);

  return (
    <View style={styles.topo}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.boas_vindas}>{topo}</Text>
      <Text style={styles.legenda}>{legenda}</Text>
    </View>
  );
}
