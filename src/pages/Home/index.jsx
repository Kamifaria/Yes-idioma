import ComponentMenu from "../../componentes/Menu";
import BannerHotel from "../../componentes/Banner/BannerHotel";
import { useRef } from "react";

import Banner2 from "../../componentes/Banner2/Banner2";
import Palestras from "../../componentes/Palestras/Palestras";
import Agenda from "../../componentes/Agenda/Agenda";
import Transfer from "../../componentes/Transfer/Transfer";

import { useNavigate } from "react-router-dom";
import Lotes from "../../componentes/Lotes/Lotes";
import Duvidas from "../../componentes/Duvidas/Duvidas";
import Footer from "../../componentes/footer/Footer";
import CadastroTransfer from "../../componentes/TelaCadastroTransfer/CadastroTransfer";
import Carousel from "../../componentes/Carrousel";
import FotoGaleria from "../../componentes/Carrousel/img/img1.jpg";
import Foto2Galeria from "../../componentes/Carrousel/img/img2.jpg";
import Foto3Galeria from "../../componentes/Carrousel/img/img3.jpg";
import Foto6Galeria from "../../componentes/Carrousel/img/img4.jpg";
import Foto5Galeria from "../../componentes/Carrousel/img/img5.jpg";
import Foto7Galeria from "../../componentes/Carrousel/img/img6.jpg";
import Foto8Galeria from "../../componentes/Carrousel/img/img7.jpg";
import Foto9Galeria from "../../componentes/Carrousel/img/img8.jpg";
import Foto10Galeria from "../../componentes/Carrousel/img/img9.jpg";
import ConvPass from "../../componentes/convenPass";
import Video from "../../componentes/videos";
const images = [
  FotoGaleria,
  Foto2Galeria,
  Foto3Galeria,
  Foto6Galeria,
  Foto5Galeria,
  Foto7Galeria,
  Foto8Galeria,
  Foto9Galeria,
  Foto10Galeria
];

function Home() {
  const navigate = useNavigate();
  const hotelRef = useRef(null);

  const page_control = (page) => {
    navigate(`/${page}`);
  };

  const handleClick = (top) => {
    // Scroll para a posição desejada
    window.scrollTo({
      top: top, // Pode alterar para a posição que desejar
      behavior: "smooth", // Faz o scroll ser suave
    });
  };

  return (
    <div>
      <ComponentMenu
        page_control={(content) => page_control(content)}
        handleClick={(content) => handleClick(content)}
      />
      <BannerHotel page_control={(content) => page_control(content)} />
      <Banner2 />
      <Lotes page_control={(content) => page_control(content)} />
      <Carousel ref={hotelRef} images={images} />
      <Agenda />
      <ConvPass />
      <Transfer />
      <Duvidas />
      {false && <Palestras />}
      <Footer />
    </div>
  );
}

export default Home;
