import style from './Duvidas.module.css';

function Duvidas() {
  return (
    <div className={style.containerDuvidas}>
      <div className={style.tituloDuvidas}>
        <p>tire suas dúvidas</p>
        <h1>Perguntas Frequentes</h1>
      </div>
      <div className={style.conteudoDuvidas}>
        <div className={style.perguntasDuvidas}>
         <strong>POSSO COMPRAR COM DESCONTO?</strong>
          <p>
            Sim. Aproveite o primeiro lote, que é o mais vantajoso financeiramente. Não haverá prorrogação de prazo ou valores.
          </p>

          <strong>TEM PRAZO PARA INSCRIÇÃO?</strong>

          <p>
            Sim. Inscrições somente até 30/09.
          </p>

          <strong>QUERO FICAR EM UM QUARTO SOZINHO! COMO FAÇO?</strong>
          <p>
            Faça a sua inscrição em quarto single e realize o pagamento no valor de R$ 3.000,00. Sim, a tarifa é diferente para acomodação individual e as unidades de quartos neste formato são limitadas.
          </p>

          <strong>VOU SOZINHO! POSSO FICAR EM QUARTO DUPLO OU TRIPLO?</strong>
          <p>
            Sim. As inscrições individuais em quarto duplo ou triplo, estarão sujeitas a divisão de quarto. Assim é possível a permanência do desconto do lote vigente no ato da inscrição. Faça a sua inscrição normalmente e clique no check box com a seguinte mensagem: Vou sozinho e quero dividir o quarto com outro participante.
          </p>

        </div>
        <div className={style.perguntasDuvidas}>
        <strong>QUAIS SÃO AS FORMAS DE PAGAMENTO?</strong>
          <p>
            Você poderá pagar no PIX ou em até 10x sem juros no Cartão de Crédito.
          </p>

        <strong>QUANTO CUSTA PARA ACOMPANHANTES E CRIANÇAS?</strong>
          <p>
            Para acompanhantes os valores são os mesmos. Até 2 Crianças de até 12 anos, até a data do evento, por quarto, não pagam.
          </p>

        <strong>OUTRAS DÚVIDAS</strong>
          <p>
            Entre em contato com o SAFY através dos canais: safy@yes.com.br ou (21) 2483-1000.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Duvidas;
