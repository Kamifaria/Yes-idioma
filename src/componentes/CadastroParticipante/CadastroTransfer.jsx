import React, { useState } from 'react';
import Footer from '../footer/Footer';
import YesRed from './yes_marca.png';
import style from './CadastroTransfer.module.css';
import InputTexto from '../input/InputText';
import SelectForm from '../Select/Seletor';
import RadioInput from '../RadioInput';
import {api} from '../../services/Api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InputTextoMask from '../inputMask/InputTextMask';

const options = [
  { value: 'pp', label: 'PP' },
  { value: 'p', label: 'P' },
  { value: 'm', label: 'M' },
  { value: 'g', label: 'G' },
  { value: 'gg', label: 'GG' },
  { value: 'xg', label: 'XG' },
];

const options2 = [
  { value: 'individual', label: 'Individual' },
  { value: 'duplo', label: 'Duplo' },
  { value: 'familiar', label: 'Familiar' },
];

async function SendParticipanteApi(candidato){
  await axios.post('https://api.yes.com.br/api/ApiConvecao/convecao', 
  {
      " nome_responsavel": "João da Silva",
      "numero_pedido": "123456",
      "id_participante": "789",
      "cpf_responsavel": "136.962.147-79",
      "rg": "1234567",
      "data_nascimento": "26/02/2024",
      "tamanho_camisa": "M",
      "cargo": "Gerente",
      "cep_aluno": "12345-678",
      "rua": "Rua Exemplo",
      "complemento": "Apto 123",
      "numero": "456",
      "bairro": "Centro",
      "cidade": "São Paulo",
      "uf": "SP",
      "email_aluno": "joao@example.com",
      "telefone": "(21) 99999-9999",
      "status_venda": "Pendente",
      "valor_material": 390,
      "forma_pagamento": 2,
      "plataforma": 1,
      "gateway_pagamento": 3,
      "url_boleto": "http://exemplo.com/boleto",
      "data_hora_venda": "2024-02-26T10:00:00",
      "quantidade_livros": 2,
      "valor_frete": 0,
      "unidade_id": 0,
      "client_id": "456",
      "iugo_fatura_id": "987654321",
      "acomodacao": "familia",
      "participantes": [
          {
              " nome_responsavel_participante": "Fulano",
              "cpf_responsavel_participante": "123.456.789-00",
              "data_nascimento_participante": "01/01/2000",
              "tamanho_camisa_participante": "P",
          "unidade_id_participante":"",
          "cpf_participante":"136.962.147-79",
          "rg_participante":"1234567",
          "cargo_participante":"Gerente"
          },
          {
              " nome_responsavel_participante": "Ciclano",
              "cpf_responsavel_participante": "987.654.321-00",
              "data_nascimento_participante": "02/02/1990",
              "tamanho_camisa_participante": "G",
              "unidade_id_participante":"",
              "cpf_participante":"136.962.147-79",
          "rg_participante":"1234567",
          "cargo_participante":"Gerente"
          }
      ]
  }
  , 
  {
      headers: { 'Content-Type': 'application/json' }
  }).then((data) =>{
        console.log(data);
      }).catch((erro) =>{
        console.log(erro);
      });
}

function CadastroParticipante() {
  const navigate = useNavigate();
  const [onlyUser, setOnlyUser] = useState(false);

  const [datasUser, setDatasUser] = useState({
    nome_responsavel: "",
    numero_pedido: "123456",
    id_participante: "789",
    cpf_responsavel: "",
    rg: "",
    data_nascimento: "",
    tamanho_camisa: "",
    cargo: "",
    cep_aluno: "",
    rua: "Rua Exemplo",
    complemento: "Apto 123",
    numero: "456",
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP",
    email_aluno: "",
    telefone: "(21) 99999-9999",
    status_venda: "Pendente",
    valor_material: 390,
    forma_pagamento: 2,
    plataforma: 1,
    gateway_pagamento: 3,
    url_boleto: "http://exemplo.com/boleto",
    data_hora_venda: "2024-02-26T10:00:00",
    quantidade_livros: 2,
    valor_frete: 0,
    unidade_id: 0,
    client_id: "456",
    iugo_fatura_id: "987654321",
    acomodacao: "familia",
    participantes: [
      {
        nome_responsavel_participante: "Fulano",
        cpf_responsavel_participante: "123.456.789-00",
        data_nascimento_participante: "2000-01-01",
        tamanho_camisa_participante: "P",
        unidade_id_participante: "",
        cpf_participante: "136.962.147-79",
        rg_participante: "1234567",
        cargo_participante: "Gerente"
      },
      {
        nome_responsavel_participante: "Ciclano",
        cpf_responsavel_participante: "987.654.321-00",
        data_nascimento_participante: "1990-02-02",
        tamanho_camisa_participante: "G",
        unidade_id_participante: "",
        cpf_participante: "136.962.147-79",
        rg_participante: "1234567",
        cargo_participante: "Gerente"
      }
    ]
  });
  

  const page_control = (page) =>{ navigate(`/${page}`, { state: { datas: datasUser } }) }

  return (
    <div>
      <div className={style.containerTransfer}>
        <img src={YesRed} alt="" />
        <div className={style.tituloParticipante}>
          <strong>Transfer</strong>
          <p>
            Preencha os campos abaixo e não fique de fora da 10ª Convenção YES!
          </p>
        </div>
        <div className={style.checkboxparticipante}>
          <input type="checkbox" onClick={() => setDatasUser(!onlyUser)} />
          <label htmlFor="">Vou sozinho(a) estou ciente da divisão de quarto.</label>
        </div>
        <div className={style.formTransfer}>
          <p>Vagas na acomodação: 1</p>

     

        
          <InputTexto placeholder="Nome do participante" name="nome" onChange={(content) => setDatasUser(prevState => ({...prevState, nome_responsavel: content.target.value}))} />
          <div className={style.duplo}>
            <InputTexto placeholder="RG" nome="rg" onChange={(content) => setDatasUser(prevState => ({...prevState, rg: content.target.value}))} />
            <InputTexto placeholder="CPF" nome="cpf" onChange={(content) => setDatasUser(prevState => ({...prevState, cpf_responsavel: content.target.value}))} />
          </div>
          <div className={style.duplo}>
            <InputTexto
              placeholder="Data de Nascimento"
              nome="data de nascimento"
              onChange={(content) => setDatasUser(prevState => ({...prevState, data_nascimento: content.target.value}))}
            />
            <InputTexto placeholder="Cargo" nome="Cargo" onChange={(content) => setDatasUser(prevState => ({...prevState, cargo: content.target.value}))} />
          </div>
          <div className={style.duplo}>
            <InputTexto placeholder="E-mail" nome="email" onChange={(content) => setDatasUser(prevState => ({...prevState,  email_aluno: content.target.value}))} />
            <InputTexto placeholder="CEP" nome="cep" onChange={(content) => setDatasUser(prevState => ({...prevState, cep_aluno: content.target.value}))} />
          </div>
          
          
          <RadioInput
            options={options}
            /* selectedOption={selectedOption} */
            onChange={(content) => setDatasUser(prevState => ({...prevState, tamanho_camisa: content}))}
            name="camisa"
            title="Escolha o tamanho da sua camisa unissex:"
          />

         
      
          
          <div className={style.continuar}>
            <a  onClick={() => page_control(!onlyUser ? "CadastroConvidados" : "talpagina")} >
            Continuar </a>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CadastroParticipante;