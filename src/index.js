import React from 'react';
import ReactDOM from 'react-dom/client';
import Mensagem from './components/basico/Mensagem';
import Card from './components/card/Card';
import Cards from './components/cards/Cards';
import Contador from './components/contador/Contador';
import Rodape from './components/rodape/Rodape';
import Rolagem from './components/basico/Rolagem/Rolagem';
import Scrollable from './components/scrollable/Scrollable';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mensagem titulo="React 2023" sub="Bem vindo" color="red"/>
    
    <Cards>
    <Card titulo="1 Exemplo"  mensagem="Teste" open="true">
      <h1>Teste</h1>
      <Contador value=""/>
      <Scrollable move="true"/>
    </Card>
    <Card titulo="2 Exemplo" open="false">
      <Contador value=""/>
      <Rolagem/>
    </Card>
    </Cards>
     {/* para a atividade que tem no canvas*/}
    <Rodape>
      <h2>Logo</h2>
    </Rodape>
  </React.StrictMode>
);
