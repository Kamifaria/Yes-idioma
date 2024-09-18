import style from './Transfer.module.css';
import Buzao from './onibus.png';
import Fundo from './fundo2.png';

function Transfer() {
  return (
    <div className={style.containerTransfer}>
      <div className={style.fundoTransfer}>
        <img src={Fundo} alt="" />
      </div>
      <div className={style.conteudoTransfer}>
        <b>
          <p className={style.titleTransfer}>TRANSFER</p>
        </b>
        <b>
          <h1 className={style.titleTransfer}>Não fique de fora da   </h1>
        </b>
        <h1 className={style.titleTransfer}>10ª Convenção YES!</h1>
        <p>
          Queremos que sua jornada até o evento seja a mais segura e conformável
          possível.
        </p>

        <p>
          Então, planeje sua rota com antecedência e escolha a opção de
          transporte que mais se adequa às suas necessidades.
        </p>

        <p>
          Disponibilizaremos dois transferes para maior comodidade de vocês. Um
          sairá do aeroporto Galeão e outro da Franqueadora. Esta ação
          também tem limitações de vagas, então, garanta sua vaga já!{' '}
        </p>

       

       <a className={style.bntTransfer} href="https://qa0qeqkl.forms.app/convencao2024" target='blank' >
          garanta seu lugar
        </a>
      </div>
    </div>
  );
}

export default Transfer;
