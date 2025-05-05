import style from './Lotes.module.css';
import Esgotado from './Esgotado.png';
import background from './bg-lotes.png';

function Lotes( props ){
    return(
        <div className={style.containerLotes}>
            <div className={style.background}>
                <img src={background} alt=""/>
            </div>

            <div className={style.tituloLote}>
                <h4>Inscreva-se</h4>
                <h1>Garanta o seu lugar</h1>
            </div>

            <div className={style.bannerContainerLotes}>
                <div className={style.bannerLotes}>
                    <h1>Pré-Venda</h1>
                    <h1 className={style.valorLotes}>R$ 1.990</h1>
                    <p>por pessoa até 31/12</p>

                    <img className={style.loteEsgotado} src={Esgotado} alt="" />                                      
                     

                </div>
                <div className={style.bannerLotes}>
                    <h1>1º lote</h1>
                    <h1 className={style.valorLotes}>R$ 2.300</h1>
                    <p>por pessoa até 31/12</p>
                    
                    <img className={style.loteEsgotado} src={Esgotado} alt="" />

                </div>
                <div className={style.bannerLotes}>
                    <h1>2º lote</h1>
                    <h1 className={style.valorLotes}>R$ 2.800</h1>
                    <p>por pessoa até 28/02</p>
                                   
                    <img className={style.loteEsgotado} src={Esgotado} alt="" />

                </div>

                <div className={style.bannerLotes}>
                    <h1>3º lote</h1>
                    <h1 className={style.valorLotes}>R$ 3.000</h1>
                    <p>por pessoa até 31/05</p>
                    
                    <a onClick={() => props.page_control("CadastroTransfer")}  className={style.btnLotes} >Faça sua reserva </a>

                </div>
            </div>

        </div>
    );
}

export default Lotes;