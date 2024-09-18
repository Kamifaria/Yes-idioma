import React, { useState } from 'react';
import style from './Agenda.module.css';
import TimeLine from './agenda-dia-07-novo.png';
import TimeLine2 from './breve.png';
import TimeLine4 from './dia-10.png';


function Agenda(){
    const [ pathImg, setPathImg] = useState(TimeLine);
    console.log(pathImg);
    return(
        <div className={style.containerAgenda}>
            <div  className={style.titiloagenda}>
                <p>programação</p>
                <h1>Confira a agenda  cada dia</h1>
            </div>
            <div className={style.calendarioAgenda}>
                
                <div  onClick={() => setPathImg(TimeLine) } className={style.boxAgenda}>
                    <div className={style.itemSpace}>
                        <span className={style.itemData}>Dia 01</span>
                    </div>
                    
                    <div  className={style.itemText}>
                        <b>07</b> out 2024
                    </div>
                </div>
                
                <div onClick={() => setPathImg(TimeLine2) } className={style.boxAgenda}>
                    <div className={style.itemSpace}>
                    <span className={style.itemData}>Dia 02</span>
                    </div>
                    
                    <div className={style.itemText}>
                        <b>08</b> out 2024
                    </div>
                </div>
                <div onClick={() => setPathImg(TimeLine2) } className={style.boxAgenda}>
                    <div className={style.itemSpace}>
                        <span className={style.itemData}>Dia 03</span>
                    </div>
                    
                    <div className={style.itemText}>
                        <b>09</b> out 2024
                    </div>
                </div>
                <div onClick={() => setPathImg(TimeLine2) } className={style.boxAgenda}>
                    <div className={style.itemSpace}>
                        <span className={style.itemData}>Dia 04</span>
                    </div>
                    
                    <div className={style.itemText}>
                        <b>10</b> out 2024
                    </div>
                </div>
            </div>
            <div className={style.imagemAgenda}>
                <img src={pathImg} alt="" />
            </div>
        </div>

    );
}

export default Agenda;