import React, { useState } from 'react';
import style from './Agenda.module.css';
import TimeLine from './agenda.png';


function Agenda(){
    const [ pathImg, setPathImg] = useState(TimeLine);
    console.log(pathImg);
    return(
        <div className={style.containerAgenda}>
            <div  className={style.titiloagenda}>
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