import React from 'react';
import background from './bg-palestrantes.png';
import Perfil from './breve.png';
import style from './Palestras.module.css';

function Palestras() {
  return (
    <div className={style.palestras}>
      <div className={style.background}>
        <img src={background} alt="" />
      </div>
      <div className={style.titulopalestra}>
        <h4>Palestrantes</h4>
        <h1>Confira as principais atrações</h1>
      </div>
      <div className={style.palestrantes}>
        <div className={style.imgPalestra}>
          <img src={Perfil} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Palestras;
