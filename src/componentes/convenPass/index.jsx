import Pass from './video.png';
import style from './style.module.css';

function ConvPass(){
    return(

        <div className={style.containerPass}>

            <div className={style.title}>
                <h4>9ª Convenção</h4>
                <h1>Assista os melhores momentos da</h1> 
                <h1>Convenção 2023</h1>
            </div>

            <div className={style.videoPas}> 
                <a href="https://iframe.dacast.com/vod/9d1bb985-b98f-ac69-be46-9f982550b6b0/7f800474-0dcd-4771-ab54-04bf526ff825" target='_blank'><img src={Pass} alt="" /></a>
            </div>

        </div>

    );w
}

export default ConvPass;