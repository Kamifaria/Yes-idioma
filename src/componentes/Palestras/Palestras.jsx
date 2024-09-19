import React from 'react';
import Perfil from './perfil.png';
import Perfilbanda from './perfil-musico.png';
import Higor from './higor-fabiano.png';
import Yuri from './yuri-utida.png';
import Naldo from './naldo-jr.png';
import Ultravolts from './banda-ultravolts.png';
import NomePalestrante1 from './palestrante.png';
import NomePalestrante2 from './palestrante.png'; 
import NomePalestrante3 from './higor-fabiano-inst.png'; 
import NomePalestrante4 from './yuri-inst.png'; 
import NomePalestrante5 from './naldo-jr-inst.png'; 
import NomePalestrante6 from './musico.png'; 
import NomePalestrante7 from './banda-ultravolts-inst.png';
import NomePalestrante8 from './musico.png';

import style from './Palestras.module.css';

function Palestras() {
  return (
    <div className={style.palestras}>
      <div className={style.titulopalestra}>
        <h1>Confira as principais atrações</h1>
      </div>
      <div className={style.palestrantes}>
        {/* Linha superior */}
        <div className={style.linha}>
          <a href="#">
            <div className={style.palestrante2}>
              <img className={style.imgPalestra} src={Perfil} alt="Palestrante 1" />
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
              <img className={style.imgPalestra} src={Higor} alt="Palestrante 3" />
              <img className={style.nomePalestrante} src={NomePalestrante3} alt="Nome do Palestrante 3" />
            </div>
          </a>
          <a href="#">
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Yuri} alt="Palestrante 4" />
              <img className={style.nomePalestrante} src={NomePalestrante4} alt="Nome do Palestrante 4" />
            </div>
          </a>
        </div>
        {/* Linha inferior */}
        <div className={style.linha}>
          <a href="#">
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Naldo} alt="Palestrante 5" />
              <img className={style.nomePalestrante} src={NomePalestrante5} alt="Nome do Palestrante 5" />
            </div>
          </a>
          <a href="#">
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Perfilbanda} alt="Palestrante 6" />
              <img className={style.nomePalestrante} src={NomePalestrante6} alt="Nome do Palestrante 6" />
            </div>
          </a>
          <a href="#">
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Ultravolts} alt="Palestrante 7" />
              <img className={style.nomePalestrante} src={NomePalestrante7} alt="Nome do Palestrante 7" />
            </div>
          </a>
          <a href="#">
            <div className={style.palestrante2}>
              <img className={style.imgPalestra} src={Perfil} alt="Palestrante 8" />
              <img className={style.nomePalestrante} src={NomePalestrante8} alt="Nome do Palestrante 8" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Palestras;
