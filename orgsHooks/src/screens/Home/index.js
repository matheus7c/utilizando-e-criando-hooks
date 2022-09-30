/* eslint-disable prettier/prettier */
import React from 'react';
import Produtores from './Components/Produtores/Produtores.js';
import Topo from './Components/Topo/Topo.js';

export default function Home() {
  return <Produtores topo={Topo} />;
}
