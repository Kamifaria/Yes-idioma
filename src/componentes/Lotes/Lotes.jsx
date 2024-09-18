import style from './Lotes.module.css';
import Esgotado from './Esgotado.png';

function Lotes( props ){
    return(
        <div className={style.containerLotes}>
            <div className={style.tituloLote}>
                <p>Inscreva-se</p>
                <h1>Reserve seu lugar</h1>
            </div>

            <div className={style.bannerContainerLotes}>
                <div className={style.bannerLotes}>
                    <h1>1º lote</h1>
                    <h1 className={style.valorLotes}>R$ 1.990</h1>
                    <p>por pessoa até 31/12</p>
                    <p>
                        
                    </p>
                   
                    <img className={style.loteEsgotado} src={Esgotado} alt="" />

                </div>
                <div className={style.bannerLotes}>
                    <h1>2º lote</h1>
                    <h1 className={style.valorLotes}>R$ 2.300</h1>
                    <p>por pessoa até 30/04</p>
                    
                    <img className={style.loteEsgotado} src={Esgotado} alt="" />
                </div>
                <div className={style.bannerLotes}>
                    <h1>3º lote</h1>
                    <h1 className={style.valorLotes}>R$ 2.500</h1>
                    <p>por pessoa até 31/08</p>
                    
                  

                    <img className={style.loteEsgotado} src={Esgotado} alt="" />
                </div>

                <div className={style.bannerLotes}>
                    <h1>4º lote</h1>
                    <h1 className={style.valorLotes}>R$ 3.000</h1>
                    <p>por pessoa até 30/09</p>
                    
                    <a onClick={() => props.page_control("CadastroTransfer")}  className={style.btnLotes} >faça sua reserva</a>
                </div>
            </div>

        </div>
    );
}

export default Lotes;