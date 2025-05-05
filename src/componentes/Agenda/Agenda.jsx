import React, { useState } from 'react';
import style from './Agenda.module.css';
import background from './bg-agenda.jpg';
import TimeLine from './programacao-agenda-2.png';


function Agenda(){
    const [ pathImg, setPathImg] = useState(TimeLine);
    console.log(pathImg);
    return(
        <div className={style.containerAgenda}>
            <div className={style.background}>
                <img src={background} alt=""/>
            </div>
            <div  className={style.tituloagenda}>
                <h4>Agenda</h4>
                <h1>Confira a programação de cada dia</h1>
            </div>
            <div className={style.calendarioAgenda}>
                <img src={TimeLine} alt=""></img>
            </div>
        </div>

    );
}

export default Agenda;