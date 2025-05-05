import style from './Transfer.module.css';
import background from './fundo2.png';

function Transfer() {
  return (
    <div className={style.containerTransfer}>
      <div className={style.background}>
        <img src={background} alt=""/>
      </div>
      <div className={style.conteudoTransfer}>
        <h4 className={style.titleTransfer}>Transfer</h4>
        
        <h1 className={style.titleTransfer}>Não fique de fora da 11ª Convenção!</h1>
        <p>
          Queremos que sua jornada até o evento seja a mais segura e confortável possível.
        </p>

        <p>
          Então, planeje sua rota com antecedência e escolha a opção de transporte que mais se adequa às suas necessidades.
        </p>

        <p>
         Disponibilizaremos dois transferes para maior comodidade de vocês. Esta ação também tem limitações de vagas, então, <b>garanta sua vaga já!</b>
        </p>
      

       <a className={style.bntTransfer} target='blank' >
          Garanta seu lugar
        </a>
      </div>
    </div>
  );
}

export default Transfer;
