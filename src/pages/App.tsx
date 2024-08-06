import React, {useState} from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { Itarefa } from '../types/tarefa';
import style from './App.module.scss';
import Cronometro from '../components/Cronometro/Index';


function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  return (
    <div className={style.AppStyle}>
       <Formulario setTarefas={setTarefas} />
       <Lista tarefas={tarefas}/>
       <Cronometro />
    </div>
  );
}

export default App;
