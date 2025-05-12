import PropTypes from "prop-types";
import Banner from "../hotelvilarejo.jpg";
import LogoNova from "./logo.png";
import CountdownTimer from "../Contador";
import style from "./banner.module.css";

const targetDate = new Date("2025-10-06").getTime();

BannerHotel.propTypes = {
  page_control: PropTypes.func.isRequired,
};

function BannerHotel(props) {
  return (
    <div className={style.containerBanner}>
      <div className={style.videoWrapper}>
        <iframe
          src="https://www.youtube.com/embed/UG_XbPmbC6k?autoplay=1&mute=1&loop=1&playlist=UG_XbPmbC6k"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <img className={style.imgBanner} src={Banner} alt="" />

      <div className={style.textobanner}>
        <div>
          <img className={style.LogoNova} src={LogoNova} alt="" />
        </div>

        <p>06 à 09 de Outubro de 2025</p>

        <a
          onClick={() => props.page_control("CadastroTransfer")}
          className={style.butaoBanner}
        >
          Fazer Reserva
        </a>
      </div>

      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}




export default BannerHotel;
