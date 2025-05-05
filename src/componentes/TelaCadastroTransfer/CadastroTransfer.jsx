import React, { useState } from 'react';
import ReactInputMask from 'react-input-mask';
import Footer from '../footer/Footer';
import YesRed from './yes_marca.png';
import style from './CadastroTransfer.module.css';
import InputTexto from '../input/InputText';
import SelectForm from '../Select/Seletor';
import RadioInput from '../RadioInput';
import { useNavigate } from 'react-router-dom';
import InputTextMask from '../inputMask/InputTextMask';

const options = [
  { value: 'pp', label: 'PP' },
  { value: 'p', label: 'P' },
  { value: 'm', label: 'M' },
  { value: 'g', label: 'G' },
  { value: 'gg', label: 'GG' },
  { value: 'xg', label: 'XG' },
];

const options2 = [
  { value: 'individual', label: '1 pessoa' },
  { value: 'duplo', label: '2 pessoas' },
  { value: 'familiar', label: '3 a 5 pessoas' },
];

const options3 = [
  { value: 'Franquiadora', label: 'Franqueadora' },
  { value: 'Aeroporto Santos Dumont', label: 'Aeroporto Santos Dumont' },
];


function CadastroTransfer() {
  const [mostarTranfer, setmostarTranfer] = useState(false);

  const navigate = useNavigate();
  const page_control = (page) => { navigate(`/${page}`, { state: { datas: datasUser } }) }
  const [selectedOption, setSelectedOption] = useState('option1');
  const [selectedOption2, setSelectedOption2] = useState('individual');
  const [selectedOption3, setSelectedOption3] = useState('individual');



  function verificarCamposVazios(objeto) {
    for (let chave in objeto) {
      if (typeof objeto[chave] === 'object') {
        if (verificarCamposVazios(objeto[chave])) {
          return true;
        }
      } else {
        if (objeto[chave] === "") {
          alert("Por favor, preencha todos os campos.");
          return true;
        }
      }
    }
    return false;
  }

  const [datasUser, setDatasUser] = useState({
    nome_responsavel: "",
    numero_pedido: "123456",
    id_participante: "789",
    cpf_responsavel: "",
    rg: "",
    data_nascimento: "",
    tamanho_camisa: "",
    cargo: "sem cargo",
    cep_aluno: "",
    rua: "",
    complemento: "",
    numero: "",
    bairro: "",
    cidade: "",
    uf: "",
    email_aluno: "",
    telefone: "",
    status_venda: "Pendente",
    valor_material: 3000,
    forma_pagamento: 2,
    plataforma: 1,
    gateway_pagamento: 3,
    url_boleto: "http://exemplo.com/boleto",
    data_hora_venda: "2024-02-26T10:00:00",
    quantidade_livros: 2,
    valor_frete: 0,
    unidade_id: "2",
    client_id: "456",
    iugo_fatura_id: "987654321",
    acomodacao: "individual",
    participantes: [
      {
        nome_responsavel_participante: "",
        cpf_responsavel_participante: "",
        data_nascimento_participante: "",
        tamanho_camisa_participante: "",
        unidade_id_participante: "N/D",
        nome_participante: "",
        cpf_participante: "",
        rg_participante: "",
        cargo_participante: ""
      },
      {
        nome_responsavel_participante: "",
        cpf_responsavel_participante: "",
        data_nascimento_participante: "",
        tamanho_camisa_participante: "",
        unidade_id_participante: "N/D",
        nome_participante: "",
        cpf_participante: "",
        rg_participante: "",
        cargo_participante: ""
      }
    ]
  });

  return (
    <div>
      <div className={style.containerTransfer}>
        <img src={YesRed} alt="" />
        <div className={style.tituloTransfer}>
          <strong>1º Cadastro</strong>
          <p>
            Preencha os campos abaixo e não fique de fora da 10ª Convenção YES!
          </p>
        </div>
        <div className={style.formTransfer}>



          <SelectForm placeholder="Escola YES! Idiomas" name="escola" onChange={(content) => setDatasUser(prevState => ({ ...prevState, unidade_id: content }))} />
          <InputTexto placeholder="Nome do participante" name="nome" onChange={(content) => setDatasUser(prevState => ({ ...prevState, nome_responsavel: content.target.value }))} />
          <div className={style.duplo}>
            <InputTextMask mask="99.999.999-9" placeholder="RG" nome="rg" onChange={(content) => setDatasUser(prevState => ({ ...prevState, rg: content.target.value }))} />
            <InputTextMask mask="999.999.999.99" placeholder="CPF" nome="cpf" onChange={(content) => setDatasUser(prevState => ({ ...prevState, cpf_responsavel: content.target.value }))} />

          </div>
          <div className={style.duplo}>
            <InputTextMask
              mask="99/99/9999"
              placeholder="Data de Nascimento"
              nome="data de nascimento"
              onChange={(content) => setDatasUser(prevState => ({ ...prevState, data_nascimento: content.target.value }))}
            />
            <InputTextMask mask="(99)99999-9999" placeholder="Telefone" nome="Telefone" onChange={(content) => setDatasUser(prevState => ({ ...prevState, telefone: content.target.value }))} />
          </div>
          <div className={style.duplo}>
            <InputTexto placeholder="E-mail" nome="email" onChange={(content) => setDatasUser(prevState => ({ ...prevState, email_aluno: content.target.value }))} />
            <InputTextMask mask="99999-999" placeholder="CEP" nome="cep" onChange={(content) => setDatasUser(prevState => ({ ...prevState, cep_aluno: content.target.value }))} />
          </div>
          <div className={style.triplo}>
            <InputTexto placeholder="Endereço" nome="Endereço" onChange={(content) => setDatasUser(prevState => ({ ...prevState, rua: content.target.value }))} />
            <InputTexto placeholder="Nº" nome="numero" onChange={(content) => setDatasUser(prevState => ({ ...prevState, numero: content.target.value }))} />
            <InputTexto placeholder="Complemento" nome="complemento" onChange={(content) => setDatasUser(prevState => ({ ...prevState, complemento: content.target.value }))} />
          </div>
          <div className={style.triplo}>
            <InputTexto placeholder="Bairro" nome="bairro" onChange={(content) => setDatasUser(prevState => ({ ...prevState, bairro: content.target.value }))} />
            <InputTexto placeholder="Cidade" nome="cidade" onChange={(content) => setDatasUser(prevState => ({ ...prevState, cidade: content.target.value }))} />
            <InputTexto placeholder="Estado" nome="estado" onChange={(content) => setDatasUser(prevState => ({ ...prevState, uf: content.target.value }))} />
          </div>
          <RadioInput
            options={options}
            selectedOption={selectedOption}
            onChange={(content) => { setDatasUser(prevState => ({ ...prevState, tamanho_camisa: content })); setSelectedOption(content); }}
            name="camisa"
            title="Escolha o tamanho da sua camisa unissex:"
          />
          <RadioInput
            options={options2}
            selectedOption={selectedOption2}
            onChange={(content) => {
              console.log("Valor do input:", content);
              setDatasUser(prevState => ({ ...prevState, acomodacao: content }));
              setSelectedOption2(content);
            }}
            name="acomodacao"
            title="Número de Inscrições:"
          />

          <div className={style.diventrarEmContato}>
            <p className={style.entrarEmContato}>
              *Para quartos individuais favor entrar em contato com a Franqueadora através do safy@yes.com.br
            </p>
          </div>



          <div style={{ width: "500px ", height: "100px", marginTop: "5px" }} >
            {/* <div style={{ display: "flex", flexDirection: "row", gap: "5px", marginBottom: "20px" }} >
              <input onClick={() => setmostarTranfer(!mostarTranfer)} type="checkbox" />
              <h4>Quero usar o transfer</h4>
  </div> */}
            {mostarTranfer &&
              <div className={style.radioButtonContainer}>
                {options3.map((option) => (
                  <div key={option.value}>
                    <input
                      type="radio"
                      id={option.value}
                      /* name={name} */
                      value={option.value}
                      checked={selectedOption3 === option.value}
                      onChange={() => {/* setDatasUser(prevState => ({...prevState, acomodacao: option.value})); */ setSelectedOption3(option.value) }}
                    />
                    <label htmlFor={option.value}>{option.label}</label>
                  </div>
                ))}
              </div>
            }
          </div>

          <button className={style.botaoenvio} onClick={() => {/* !verificarCamposVazios(datasUser) && */ page_control(selectedOption2 != "individual" ? "CadastroConvidados" : "Pagamento") }}  >CONTINUAR </button>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default CadastroTransfer;
