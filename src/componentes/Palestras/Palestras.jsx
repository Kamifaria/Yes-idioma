import React from 'react';
import background from './bg-palestrantes.png';
import Perfil from './palestrante-cima.png';
import Perfilbanda from './musical-cima.png';
import Perfilbaixo from './palestrante-baixo.png';
import Perfilbandabaixo from './musical-baixo.png';
import NomePalestrante1 from './palestrante-cima-hover.png';
import NomePalestrante2 from './palestrante-baixo-hover.png'; 
import NomePalestrante3 from './musical-cima-hover.png'; 
import NomePalestrante4 from './musical-baixo-hover.png';
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
              <img className={style.imgPalestra} src={Perfilbaixo} alt="Palestrante 2" />
              <img className={style.nomePalestrante} src={NomePalestrante2} alt="Nome do Palestrante 2" />
            </div>
          </a>
          <a href="#"> 
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Perfil} alt="Palestrante 3" />
              <img className={style.nomePalestrante} src={NomePalestrante1} alt="Nome do Palestrante 3" />
            </div>
          </a>
          <a href="#">
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Perfilbaixo} alt="Palestrante 4" />
              <img className={style.nomePalestrante} src={NomePalestrante2} alt="Nome do Palestrante 4" />
            </div>
          </a>
        </div>
        {/* Linha inferior */}
        <div className={style.linha}>
          <a href="#">
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Perfilbanda} alt="Palestrante 5" />
              <img className={style.nomePalestrante} src={NomePalestrante3} alt="Nome do Palestrante 5" />
            </div>
          </a>
          <a href="#">
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Perfilbandabaixo} alt="Palestrante 6" />
              <img className={style.nomePalestrante} src={NomePalestrante4} alt="Nome do Palestrante 6" />
            </div>
          </a>
          <a href="#">
            <div className={style.palestrante}>
              <img className={style.imgPalestra} src={Perfilbanda} alt="Palestrante 7" />
              <img className={style.nomePalestrante} src={NomePalestrante3} alt="Nome do Palestrante 7" />
            </div>
          </a>
          <a href="#">
            <div className={style.palestrante2}>
              <img className={style.imgPalestra} src={Perfilbandabaixo} alt="Palestrante 8" />
              <img className={style.nomePalestrante} src={NomePalestrante4} alt="Nome do Palestrante 8" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Palestras;
