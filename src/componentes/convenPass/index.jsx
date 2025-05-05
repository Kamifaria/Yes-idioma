import Pass from './video.png';
import style from './style.module.css';
import background from './bg-convenpass.jpg';

function ConvPass(){
    return(

        <div className={style.containerPass}>
            <div className={style.background}>
                <img src={background} alt=""/>
            </div>

            <div className={style.title}>
                <h1>Assista os melhores momentos da</h1> 
                <h1>Convenção 2024</h1>
            </div>

            <div className={style.videoPas}> 
                <a href="https://youtu.be/0IX0oNDjTms" target='_blank'><img src={Pass} alt="" /></a>
            </div>

        </div>

    );
}

export default ConvPass;