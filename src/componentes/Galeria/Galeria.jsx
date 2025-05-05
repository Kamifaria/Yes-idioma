import style from './Galeria.module.css';
import Piscina from './piscina.png';

function Galeria() {
    return(
        <dir className={style.containerGaleria}>
            <div className={style.textoGaleria}>
                <p>GALERIA</p>
                <h1>Conheça o Itatiaia Resort & Eventos</h1>
            </div>

            <div className={style.carrossel}>
                <img src={Piscina} alt="" />
            </div>

        </dir>
    );
}

export default Galeria;