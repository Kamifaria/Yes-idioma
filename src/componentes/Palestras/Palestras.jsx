import React from 'react';
import Perfil from './perfil.jpeg';
import Yuri from './Yuri Utida.png';
import NomePalestrante1 from './yurio inst.png'; 
import NomePalestrante2 from './palestrante.png'; 
import NomePalestrante3 from './palestrante.png'; 
import NomePalestrante4 from './palestrante.png'; 
import NomePalestrante5 from './palestrante.png'; 
import NomePalestrante6 from './palestrante.png'; 

import style from './Palestras.module.css';

function Palestras() {
  return (
    <div className={style.palestras}>
      <div className={style.titulopalestra}>
        <p>palestrantes</p>
        <h1>Confira as principais atrações</h1>
      </div>
      <div className={style.palestrantes}>
        {/* Linha superior */}
        <div className={style.linha}>
          <a href="https://www.instagram.com/yuriutida/" target="_blank">
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Yuri} alt="Palestrante 1" />
              <img className={style.nomePalestrante} src={NomePalestrante1} alt="Nome do Palestrante 1" />
            </div>
          </a>
          <a href="#"> 
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Perfil} alt="Palestrante 2" />
              <img className={style.nomePalestrante} src={NomePalestrante2} alt="Nome do Palestrante 2" />
            </div>
          </a>
          <a href="#">
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Perfil} alt="Palestrante 3" />
              <img className={style.nomePalestrante} src={NomePalestrante3} alt="Nome do Palestrante 3" />
            </div>
          </a>
        </div>
        {/* Linha inferior */}
        <div className={style.linha}>
          <a href="#">
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Perfil} alt="Palestrante 4" />
              <img className={style.nomePalestrante} src={NomePalestrante4} alt="Nome do Palestrante 4" />
            </div>
          </a>
          <a href="#">
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Perfil} alt="Palestrante 5" />
              <img className={style.nomePalestrante} src={NomePalestrante5} alt="Nome do Palestrante 5" />
            </div>
          </a>
          <a href="#">
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Perfil} alt="Palestrante 6" />
              <img className={style.nomePalestrante} src={NomePalestrante6} alt="Nome do Palestrante 6" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Palestras;
