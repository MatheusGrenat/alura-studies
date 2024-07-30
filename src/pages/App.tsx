import React from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import Botao from '../components/Botao';
import style from './App.module.scss';


function App() {
  return (
    <div className={style.AppStyle}>
       <Formulario />
       <Lista />
    </div>
  );
}

export default App;
