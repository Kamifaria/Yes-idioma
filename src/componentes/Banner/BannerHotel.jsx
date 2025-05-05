import React from "react";
import Banner from "../hotelvilarejo.jpg";
import LogoNova from "./logo.png";
import CountdownTimer from "../Contador";
import style from "./banner.module.css";

import Videoplay from "./Institucional Vilarejo Praia.mp4";

const targetDate = new Date("2025-10-06").getTime();
function BannerHotel(props) {
  return (
    <div className={style.containerBanner}>
      
      <video controls autoplay loop muted> 
          <source src={Videoplay} type="video/mp4"/>
      </video>

      <img className={style.imgBanner} src={Banner} alt="" />

      <div className={style.textobanner}>
        <div>
          <img className={style.LogoNova} src={LogoNova} alt="" />
        </div>

        <p>06 à 09 de Outubro de 2025</p>
        
        <a onClick={() => props.page_control("CadastroTransfer")}
          className={style.butaoBanner} >
          Fazer Reserva
        </a>
      </div>
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}
export default BannerHotel;
