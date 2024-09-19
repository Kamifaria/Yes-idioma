import { useState, useEffect } from "react";
import style from "./menu.module.css";
import Logo from "../logo1.png";

function ComponentMenu(props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Verificar se é um dispositivo móvel
    const isMobileDevice = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    };

    // Adicionar ou remover o ouvinte de acordo com o tipo de dispositivo
    if (!isMobileDevice()) {
      window.addEventListener("scroll", handleScroll);
    }

    // Limpar o ouvinte do evento quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${style.header} ${scrolled ? style.scrolled : ""}`}>
     
      <nav>
        <a className={style.menuItem} href="#">
          Convenção
        </a>
        <a
          onClick={() => props.handleClick(4091)}
          className={style.menuItem}
          href="#"
        >
          Hotel
        </a>
        <a 
        onClick={() => props.handleClick(2891)}
        className={style.menuItem} href="#">
          Programação
        </a>
        <a 
        onClick={() => props.handleClick(6091)}
        className={style.menuItem} href="#">
          Perguntas
        </a>
        <a 
        onClick={() => props.handleClick(4891)}
        className={style.menuItem} href="#">
          Transfer
        </a>
        <div className={style.buttonMenu}>
          <a onClick={() => props.page_control("CadastroTransfer")}>
            Fazer Reserva
          </a>
        </div>
      </nav>
    </div>
  );
}

export default ComponentMenu;
