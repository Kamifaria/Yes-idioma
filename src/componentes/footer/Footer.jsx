import LogoYes from './logoNova.png';
import style from './Footer.module.css';

function Footer(){
    return(
        <div className={style.containerFooter}>
            <img src={LogoYes} alt="" />
            
        </div>
    );
}

export default Footer;