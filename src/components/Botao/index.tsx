import React from "react";
import style from './Botao.module.scss';

interface Props{
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?:() => void,
    texto?: React.ReactNode
}
function Botao({onClick, type, texto}: Props){
    return (
        <button onClick={onClick} type={type} className={style.botao}>
            {texto}
        </button>
    )
}

export default Botao;