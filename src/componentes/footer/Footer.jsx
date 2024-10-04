import LogoYes from './logo-yes.png';
import style from './Footer.module.css';

function Footer(){
    return(
        <div className={style.containerFooter}>
            <img src={LogoYes} alt="" />
            <p>2024 - Grupo BDC | Todos os direitos reservados</p>

        </div>
    );
}

export default Footer;