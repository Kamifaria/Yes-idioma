import Player from '../PlayerVideo';
import LogoYes from '../TelaCadastroTransfer/yes_marca.png';
import Footer from '../footer/Footer';
import Check from './check.png';
import style from './style.module.css';




function TelaSucesso(){
    return(
            <div>
                <div className={style.containerSucesso}>

                    <img src={LogoYes} alt="" />
                    

                    <div className={style.etapasSucesso}>
                        <p>1º Cadastro</p>
                        <p>2º Cadastro</p>
                        <p>Pagamento</p>
                        <p className={style.confirmacao}>Confirmação</p>
                    </div>
                
                        <div>
                            <img src={Check} alt="" />
                        </div>
                        <h1 className={style.Finalizado}>Pedido finalizado!</h1>
                        <p>Parabéns, por fazer parte da 10ª Convenção da YES! Estamos felizes em ter a sua presença nesta Convenção que irá trazer momentos inesquecíveis para você.</p>
                
                </div>
                <Footer/>
            </div>
    );
}

export default TelaSucesso;