
import PropTypes from "prop-types";
import Banner from "../hotelvilarejo.jpg";
import LogoNova from "./logo.png";
import CountdownTimer from "../Contador";
import style from "./banner.module.css";

const targetDate = new Date("2025-10-06").getTime();

function BannerHotel({ page_control }) {
  return (
    <div className={style.containerBanner}>
      
      
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/UG_XbPmbC6k"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      
      <img className={style.imgBanner} src={Banner} alt="Banner Hotel" />

      
      <div className={style.textobanner}>
        <div>
          <img className={style.LogoNova} src={LogoNova} alt="Logo" />
        </div>

        <p>06 à 09 de Outubro de 2025</p>

        <a
          onClick={() => page_control("CadastroTransfer")}
          className={style.butaoBanner}
        >
          Fazer Reserva
        </a>
      </div>

      
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}


BannerHotel.propTypes = {
  page_control: PropTypes.func.isRequired,
};

export default BannerHotel;
