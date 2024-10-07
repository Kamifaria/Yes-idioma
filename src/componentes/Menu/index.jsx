import { useState, useEffect } from "react";
import style from "./menu.module.css";
import Logo from "./logo-yes.png";
import { MenuIcon } from "./menu-icon.png";

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
    <div className={`${style.container} ${scrolled ? style.scrolled : ""}`}>
      <img className={style.logo} src={Logo} alt="Logo YES!" />
      <nav>
        <a className={style.menuItem} href="#">Convenção</a>
        <a onClick={() => props.handleClick(4091)} className={style.menuItem} href="#">Hotel</a>
        <a onClick={() => props.handleClick(2891)} className={style.menuItem} href="#">Programação</a>
        <a onClick={() => props.handleClick(6091)} className={style.menuItem} href="#">Perguntas</a>
        <a onClick={() => props.handleClick(4891)} className={style.menuItem} href="#">Transfer</a>
        <a onClick={() => props.page_control("CadastroTransfer")} className={style.buttonMenu} href="#">Fazer Reserva</a>
      </nav>
    </div>
  );

}

export default ComponentMenu;
