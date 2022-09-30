import React from 'react';
import {Image, Text, View} from 'react-native';
import logo from '../../../../assets/logo.png';
import {carregaTopo} from '../../../../servicos/carregaDados';
import {styles} from './styles';

class Topo extends React.Component {
  state = {
    topo: {
      boas_vindas: '',
      legenda: '',
    },
  };

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({topo: retorno});
  }

  componentDidMount() {
    this.atualizaTopo();
  }

  render() {
    return (
      <View style={styles.topo}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.boas_vindas}>{this.state.topo.boas_vindas}</Text>
        <Text style={styles.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}
export default Topo;
