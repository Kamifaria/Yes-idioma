import React from "react";
import Banner from "../hotel.jpg";
import LogoNova from "./novaLogo.png";
import CountdownTimer from "../Contador";
import style from "./banner.module.css";

import Videoplay from "./Institucional Vilarejo Praia.mp4";

const targetDate = new Date("2024-10-07").getTime();
function BannerHotel(props) {
  return (
    <div className={style.containerBanner}>
      
      <video controls autoplay loop muted> 
          <source src={Videoplay} type="video/mp4"/>
      </video>

      <img className={style.imgBanner} src={Banner} alt="" />

      <div className={style.textobanner}>
        <h1>A Hora é agora!</h1>
        <p>Adquira o seu lugar na 11ª Convenção 2025</p>
        
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
