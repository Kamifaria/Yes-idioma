import React, { useState } from "react";
import Footer from "../footer/Footer";
import YesRed from "./yes_marca.png";
import style from "./CadastroTransfer.module.css";
import InputTexto from "../input/InputText";
import RadioInput from "../RadioInput";
import { useLocation, useNavigate } from "react-router-dom";
import InputTextMask from "../inputMask/InputTextMask";
import { Plus } from "lucide-react";

const options = [
  { value: "pp", label: "PP" },
  { value: "p", label: "P" },
  { value: "m", label: "M" },
  { value: "g", label: "G" },
  { value: "gg", label: "GG" },
  { value: "xg", label: "XG" },
];

const options2 = [
  { value: "pp", label: "PP" },
  { value: "p", label: "P" },
  { value: "m", label: "M" },
  { value: "g", label: "G" },
  { value: "gg", label: "GG" },
  { value: "xg", label: "XG" },
];

function CadastroConvidados() {
  const [selectedOption1, setSelectedOption1] = useState("option1");
  const [selectedOption2, setSelectedOption2] = useState("option2");
  const [selectedOption3, setSelectedOption3] = useState("option3");
  const [selectedOption4, setSelectedOption4] = useState("option4");
  const [selectedOption5, setSelectedOption5] = useState("option5");
  const navigate = useNavigate();

 

  const location = useLocation();
  const state = location.state;
  let datas = state.datas;
  
  const acomodacao = datas.acomodacao;
  console.log("acomodacao: "+acomodacao)

  const [datasParticipantes01, setDatasParticipantes01] = useState({
    nome_responsavel_participante: state.datas.nome_responsavel,
    cpf_responsavel_participante: state.datas.cpf_responsavel,
    data_nascimento_participante: "",
    tamanho_camisa_participante: "",
    unidade_id_participante: "N/D",
    nome_participante: "",
    cpf_participante: "",
    rg_participante: "",
    cargo_participante: "",
  });

  const [datasParticipantes02, setDatasParticipantes02] = useState({
    nome_responsavel_participante: state.datas.nome_responsavel,
    cpf_responsavel_participante: state.datas.cpf_responsavel,
    data_nascimento_participante: "",
    tamanho_camisa_participante: "M",
    unidade_id_participante: "N/D",
    nome_participante: "",
    cpf_participante: "",
    rg_participante: "",
    cargo_participante: "",
  });

  const [datasParticipantes03, setDatasParticipantes03] = useState({
    nome_responsavel_participante: state.datas.nome_responsavel,
    cpf_responsavel_participante: state.datas.cpf_responsavel,
    data_nascimento_participante: "",
    tamanho_camisa_participante: "M",
    unidade_id_participante: "N/D",
    nome_participante: "",
    cpf_participante: "",
    rg_participante: "",
    cargo_participante: "",
  });

  const [datasParticipantes04, setDatasParticipantes04] = useState({
    nome_responsavel_participante: state.datas.nome_responsavel,
    cpf_responsavel_participante: state.datas.cpf_responsavel,
    data_nascimento_participante: "",
    tamanho_camisa_participante: "M",
    unidade_id_participante: "N/D",
    nome_participante: "",
    cpf_participante: "",
    rg_participante: "",
    cargo_participante: "",
  });

  const [datasParticipantes05, setDatasParticipantes05] = useState({
    nome_responsavel_participante: state.datas.nome_responsavel,
    cpf_responsavel_participante: state.datas.cpf_responsavel,
    data_nascimento_participante: "",
    tamanho_camisa_participante: "M",
    unidade_id_participante: "N/D",
    nome_participante: "",
    cpf_participante: "",
    rg_participante: "",
    cargo_participante: "",
  });

  /* function verificaCamposVazios(objeto) {
    for (let chave in objeto) {
      if (objeto[chave] === "") {
        return true;
      }
    }
    return false;
  } */

  const isDadosParticipantesPreenchidos = (dadosParticipantes) => {
    for (const key in dadosParticipantes) {
      if (dadosParticipantes[key] === "") {
        return false;
      }
    }
    return true;
  };

  // Função para filtrar e retornar apenas os dados preenchidos
  const adicionarParticipantesPreenchidos = (...datasParticipantes) => {
    const participantesPreenchidos = datasParticipantes.filter(
      (dadosParticipantes) =>
        isDadosParticipantesPreenchidos(dadosParticipantes)
    );
    return participantesPreenchidos;
  };

  const [convidado, setConvidado] = useState({
    convidado2: false,
    convidado3: false,
    convidado4: false,
    convidado5: false,
  });

  function submitSale() {
    const participantes = adicionarParticipantesPreenchidos(
      datasParticipantes01,
      datasParticipantes02,
      datasParticipantes03,
      datasParticipantes04,
      datasParticipantes05
    );

    datas.participantes = participantes;

    

    let qtdMenoresDe12Anos = 0;

    // Obtendo a data atual
    const dataAtual = new Date();

    // Iterando sobre os participantes para contar quantos são menores de 12 anos
    for (let participante of participantes) {
      // Convertendo a data de nascimento do participante para um objeto Date (considerando o formato brasileiro dd/mm/aaaa)
      const [dia, mes, ano] = participante.data_nascimento_participante.split('/');
      const dataNascimento = new Date(`${mes}/${dia}/${ano}`);

      // Calculando a idade do participante
      const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

      // Verificando se a idade é menor que 12 anos
      if (idade < 12) {
        qtdMenoresDe12Anos++;
      }
    }

    const qtdParticipantes = datas.participantes.length;

    const qtdParticipantesPagantes = qtdParticipantes - qtdMenoresDe12Anos;

    datas.valor_material = datas.valor_material * (qtdParticipantesPagantes + 1);

    /*  for (let participante of participantes) {
      if (verificaCamposVazios(participante)) {
        alert("Por favor, preencha todos os campos.");
        return;
      }
    } */

    console.log(datas);
    console.log("Participantes pagantes: " + qtdParticipantesPagantes);
    console.log("QTD Participantes: " + qtdParticipantes);
    console.log("Crianças:  " + qtdMenoresDe12Anos);
    if (qtdParticipantes === 0) {
      alert("Preencha todos os campos!");
      return
    }

    navigate(`/Pagamento`, { state: { datas: datas } });
  }

  return (
    <div>
      <div className={style.containerTransfer}>
        <img src={YesRed} alt="" />
        <div className={style.tituloTransfer}>
          <strong>2º Cadastro</strong>
          <p>
            Preencha os campos abaixo e não fique de fora da 10ª Convenção YES!
          </p>
        </div>
        <div className={style.formTransfer}>
          <InputTexto
            placeholder="Nome do participante"
            name="nome"
            onChange={(content) =>
              setDatasParticipantes01((prevState) => ({
                ...prevState,
                nome_participante: content.target.value,
              }))
            }
          />
          <div className={style.duplo}>
            <InputTextMask
              mask="99.999.999-99"
              placeholder="RG"
              nome="rg"
              onChange={(content) =>
                setDatasParticipantes01((prevState) => ({
                  ...prevState,
                  rg_participante: content.target.value,
                }))
              }
            />
            <InputTextMask
              mask="999.999.999-99"
              placeholder="CPF"
              nome="cpf"
              onChange={(content) =>
                setDatasParticipantes01((prevState) => ({
                  ...prevState,
                  cpf_participante: content.target.value,
                }))
              }
            />
          </div>
          <div className={style.duplo}>
            <InputTextMask
              mask="99/99/9999"
              placeholder="Data de Nascimento"
              nome="data de nascimento"
              onChange={(content) =>
                setDatasParticipantes01((prevState) => ({
                  ...prevState,
                  data_nascimento_participante: content.target.value,
                }))
              }
            />
            <InputTexto
              placeholder="Cargo / Parentesco"
              nome="Cargo / Parentesco"
              onChange={(content) =>
                setDatasParticipantes01((prevState) => ({
                  ...prevState,
                  cargo_participante: content.target.value,
                }))
              }
            />
          </div>

          <RadioInput
            options={options2}
            selectedOption={selectedOption1}
            onChange={(value) => {
              setSelectedOption1(value);
              setDatasParticipantes01((prevState) => ({
                ...prevState,
                tamanho_camisa_participante: value,
              }));
            }}
            title="Escolha o tamanho da sua camisa unissex:"
          />

          {convidado.convidado2 === false && (
            <div className={style.divBotaoParticipante}>
              <button
                onClick={() =>
                  setConvidado((prevState) => ({
                    ...prevState,
                    convidado2: true,
                  }))
                }
                className={style.adicionar}
              >
                {" "}
                <Plus size={15} /> Adicionar participante
              </button>
            </div>
          )}
        </div>

        {convidado.convidado2 && (
          <div className={style.formTransfer}>
            <InputTexto
              placeholder="Nome do participante"
              name="nome"
              onChange={(content) =>
                setDatasParticipantes02((prevState) => ({
                  ...prevState,
                  nome_participante: content.target.value,
                }))
              }
            />
            <div className={style.duplo}>
              <InputTextMask
                mask="99.999.999-99"
                placeholder="RG"
                nome="rg"
                onChange={(content) =>
                  setDatasParticipantes02((prevState) => ({
                    ...prevState,
                    rg_participante: content.target.value,
                  }))
                }
              />
              <InputTextMask
                mask="999.999.999-99"
                placeholder="CPF"
                nome="cpf"
                onChange={(content) =>
                  setDatasParticipantes02((prevState) => ({
                    ...prevState,
                    cpf_participante: content.target.value,
                  }))
                }
              />
            </div>
            <div className={style.duplo}>
              <InputTextMask
                mask="99/99/9999"
                placeholder="Data de Nascimento"
                nome="data de nascimento"
                onChange={(content) =>
                  setDatasParticipantes02((prevState) => ({
                    ...prevState,
                    data_nascimento_participante: content.target.value,
                  }))
                }
              />
              <InputTexto
                placeholder="Cargo / Parentesco"
                nome="Cargo / Parentesco"
                onChange={(content) =>
                  setDatasParticipantes02((prevState) => ({
                    ...prevState,
                    cargo_participante: content.target.value,
                  }))
                }
              />
            </div>

            <RadioInput
              options={options2}
              selectedOption={selectedOption2}
              onChange={(value) => {
                setSelectedOption2(value);
                setDatasParticipantes02((prevState) => ({
                  ...prevState,
                  tamanho_camisa_participante: value,
                }));
              }}
              title="Escolha o tamanho da sua camisa unissex:"
            />

            {convidado.convidado3 === false && acomodacao !== "duplo" && (
              <div className={style.divBotaoParticipante}>
                <button
                  onClick={() =>
                    setConvidado((prevState) => ({
                      ...prevState,
                      convidado3: true,
                    }))
                  }
                  className={style.adicionar}
                >
                  {" "}
                  <Plus size={15} /> Adicionar participante
                </button>
              </div>
            )}
          </div>
        )}

        {convidado.convidado3 && (
          <div className={style.formTransfer}>
            <InputTexto
              placeholder="Nome do participante"
              name="nome"
              onChange={(content) =>
                setDatasParticipantes03((prevState) => ({
                  ...prevState,
                  nome_participante: content.target.value,
                }))
              }
            />
            <div className={style.duplo}>
              <InputTextMask
                mask="99.999.999-99"
                placeholder="RG"
                nome="rg"
                onChange={(content) =>
                  setDatasParticipantes03((prevState) => ({
                    ...prevState,
                    rg_participante: content.target.value,
                  }))
                }
              />
              <InputTextMask
                mask="999.999.999-99"
                placeholder="CPF"
                nome="cpf"
                onChange={(content) =>
                  setDatasParticipantes03((prevState) => ({
                    ...prevState,
                    cpf_participante: content.target.value,
                  }))
                }
              />
            </div>
            <div className={style.duplo}>
              <InputTextMask
                mask="99/99/9999"
                placeholder="Data de Nascimento"
                nome="data de nascimento"
                onChange={(content) =>
                  setDatasParticipantes03((prevState) => ({
                    ...prevState,
                    data_nascimento_participante: content.target.value,
                  }))
                }
              />
              <InputTexto
                placeholder="Cargo / Parentesco"
                nome="Cargo / Parentesco"
                onChange={(content) =>
                  setDatasParticipantes03((prevState) => ({
                    ...prevState,
                    cargo_participante: content.target.value,
                  }))
                }
              />
            </div>

            <RadioInput
              options={options2}
              selectedOption={selectedOption3}
              onChange={(value) => {
                setSelectedOption3(value);
                setDatasParticipantes03((prevState) => ({
                  ...prevState,
                  tamanho_camisa_participante: value,
                }));
              }}
              title="Escolha o tamanho da sua camisa unissex:"
            />

            {convidado.convidado4 === false && acomodacao !== "duplo" &&  (
              <div className={style.divBotaoParticipante}>
                <button
                  onClick={() =>
                    setConvidado((prevState) => ({
                      ...prevState,
                      convidado4: true,
                    }))
                  }
                  className={style.adicionar}
                >
                  {" "}
                  <Plus size={15} /> Adicionar participante
                </button>
              </div>
            )}
          </div>
        )}
        {convidado.convidado4 && (
          <div className={style.formTransfer}>
            <InputTexto
              placeholder="Nome do participante"
              name="nome"
              onChange={(content) =>
                setDatasParticipantes04((prevState) => ({
                  ...prevState,
                  nome_participante: content.target.value,
                }))
              }
            />
            <div className={style.duplo}>
              <InputTextMask
                mask="99.999.999-99"
                placeholder="RG"
                nome="rg"
                onChange={(content) =>
                  setDatasParticipantes04((prevState) => ({
                    ...prevState,
                    rg_participante: content.target.value,
                  }))
                }
              />
              <InputTextMask
                mask="999.999.999-99"
                placeholder="CPF"
                nome="cpf"
                onChange={(content) =>
                  setDatasParticipantes04((prevState) => ({
                    ...prevState,
                    cpf_participante: content.target.value,
                  }))
                }
              />
            </div>
            <div className={style.duplo}>
              <InputTextMask
                mask="99/99/9999"
                placeholder="Data de Nascimento"
                nome="data de nascimento"
                onChange={(content) =>
                  setDatasParticipantes04((prevState) => ({
                    ...prevState,
                    data_nascimento_participante: content.target.value,
                  }))
                }
              />
              <InputTexto
                placeholder="Cargo / Parentesco"
                nome="Cargo / Parentesco"
                onChange={(content) =>
                  setDatasParticipantes04((prevState) => ({
                    ...prevState,
                    cargo_participante: content.target.value,
                  }))
                }
              />
            </div>

            <RadioInput
              options={options2}
              selectedOption={selectedOption4}
              onChange={(value) => {
                setSelectedOption4(value);
                setDatasParticipantes04((prevState) => ({
                  ...prevState,
                  tamanho_camisa_participante: value,
                }));
              }}
              title="Escolha o tamanho da sua camisa unissex:"
            />

            {convidado.convidado5 === false && acomodacao !== "duplo" && (
              <div className={style.divBotaoParticipante}>
                <button
                  onClick={() =>
                    setConvidado((prevState) => ({
                      ...prevState,
                      convidado5: true,
                    }))
                  }
                  className={style.adicionar}
                >
                  {" "}
                  <Plus size={15} /> Adicionar participante
                </button>
              </div>
            )}
          </div>
        )}
        {convidado.convidado5 && (
          <div className={style.formTransfer}>
            <InputTexto
              placeholder="Nome do participante"
              name="nome"
              onChange={(content) =>
                setDatasParticipantes05((prevState) => ({
                  ...prevState,
                  nome_participante: content.target.value,
                }))
              }
            />
            <div className={style.duplo}>
              <InputTextMask
                mask="99.999.999-99"
                placeholder="RG"
                nome="rg"
                onChange={(content) =>
                  setDatasParticipantes05((prevState) => ({
                    ...prevState,
                    rg_participante: content.target.value,
                  }))
                }
              />
              <InputTextMask
                mask="999.999.999-99"
                placeholder="CPF"
                nome="cpf"
                onChange={(content) =>
                  setDatasParticipantes05((prevState) => ({
                    ...prevState,
                    cpf_participante: content.target.value,
                  }))
                }
              />
            </div>
            <div className={style.duplo}>
              <InputTextMask
                mask="99/99/9999"
                placeholder="Data de Nascimento"
                nome="data de nascimento"
                onChange={(content) =>
                  setDatasParticipantes05((prevState) => ({
                    ...prevState,
                    data_nascimento_participante: content.target.value,
                  }))
                }
              />
              <InputTexto
                placeholder="Cargo / Parentesco"
                nome="Cargo / Parentesco"
                onChange={(content) =>
                  setDatasParticipantes05((prevState) => ({
                    ...prevState,
                    cargo_participante: content.target.value,
                  }))
                }
              />
            </div>

            <RadioInput
              options={options2}
              selectedOption={selectedOption5}
              onChange={(value) => {
                setSelectedOption5(value);
                setDatasParticipantes05((prevState) => ({
                  ...prevState,
                  tamanho_camisa_participante: value,
                }));
              }}
              title="Escolha o tamanho da sua camisa unissex:"
            />
          </div>
        )}
        <button className={style.botaoConvidado} onClick={() => submitSale()}>
          Continuar{" "}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default CadastroConvidados;
