import style from './Banner2.module.css';
import hotel from './image-sobre.png';

function Banner2() {
  return (
    <div className={style.containerbanner2}>
      <div className={style.containerCafe}>
        <img src={hotel} alt="" />
        <div className={style.texto}>
          <h4>Vem aí </h4>
          
          <h1>11ª Convenção de Franqueados YES!</h1>
          
          <p>É com grande alegria e entusiasmo que estamos preparando a nossa <b>11ª Convenção</b>. Este evento promete ser um marco em nossa jornada, repleto de aprendizado, networking, entretenimento e oportunidades emocionantes.</p>

          <p>Devido à grande procura e a quantidade de quartos do hotel, <b>as vagas são limitadas!</b> Recomendamos que garanta sua participação o mais rápido possível.</p>

          <ul>
            <li>Participe de workshops e sessões exclusivas para aprimorar suas habilidades e conhecimentos.</li>
            <li>Conecte-se com colegas franqueados e compartilhe experiências.</li>
            <li>Conheça as últimas estratégias e novidades da <b>YES!.</b></li>
          </ul>

          <p>Estamos ansiosos para recebê-los neste <strong>encontro mais que especial.</strong></p>

        </div>
      </div>
    </div>
  );
}
export default Banner2;
