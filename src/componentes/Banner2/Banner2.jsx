import style from './Banner2.module.css';
import Itati from './image-sobre.png';

function Banner2() {
  return (
    <div className={style.containerbanner2}>
      <div className={style.containerCafe}>
        <img src={Itati} alt="" />
        <div className={style.texto}>
          <h2>Vem aí </h2>
          
          <h1>11ª Convenção de <br/> Franqueados YES! Idiomas</h1>
          <p>
          É com grande alegria e entusiasmo que estamos preparando a nossa 11ª Convenção. Este evento promete ser um marco em nossa jornada, repleto de aprendizado, networking, entretenimento e oportunidades emocionantes. Devido à grande procura e a quantidade de quartos do hotel, as vagas são limitadas! Recomendamos que garanta sua participação o mais rápido possível.
          </p>

          <ul>
            <li>Participe de workshops e sessões exclusivas para aprimorar suas habilidades e conhecimentos.</li>
            <li>Conecte-se com colegas franqueados e compartilhe experiências.</li>
            <li>Conheça as últimas estratégias e novidades da <b>YES! Idiomas.</b></li>
          </ul>

          <p>Estamos ansiosos para recebê-los neste encontro mais que especial.</p>

          <strong>Faça parte da 11ª Convenção agora mesmo!</strong>
        </div>
      </div>
    </div>
  );
}
export default Banner2;
