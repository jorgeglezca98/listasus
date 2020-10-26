import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list/list'

ReactDOM.render(
  <List author="Jorge" name="Animales" likes={12352} elements={ ["perro", "gato", "elefante", "tigre", "boa"] }/>,
  document.getElementById('root')
);