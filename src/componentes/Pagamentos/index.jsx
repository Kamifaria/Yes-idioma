import style from './style.module.css';
import YesRed from './yes_marca.png';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from "../footer/Footer";
import React, { useState } from 'react';






function Pagamento() {
    const location = useLocation();
    const state = location.state;


    const [selectedOption, setSelectedOption] = useState(null);

    const [datas, setDatas] = useState(state.datas);
    console.log(datas)




    /* async function SendParticipanteApi(datas) {
        try {
            const response = await axios.post('https://api.yes.com.br/api/ApiConvecao/convecao', { datas }, {
                headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', }
            });
            console.log(response.data);
            return response.data; 
        } catch (error) {
            console.error('Error sending request:', error);
            throw error;
        }
    } */
    const SendParticipanteApi = async (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append(
            'sec-ch-ua',
            '"Not.A/Brand";v="8", "Chromium";v="114", "Google Chrome";v="114"'
        );
        myHeaders.append('Accept', 'application/json, text/plain, /');
        myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
        myHeaders.append('Referer', 'http://localhost:3000/');
        myHeaders.append('sec-ch-ua-mobile', '?0');
        myHeaders.append(
            'User-Agent',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'
        );
        myHeaders.append('sec-ch-ua-platform', '"Windows"');

        var raw = JSON.stringify(datas);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        await fetch(
            'https://api.yes.com.br/api/ApiConvecao/convecao',
            requestOptions
        )
            .then(async (response) => {
                const data = await response.json();

                window.location.href = data.link;
            })
            .catch((error) => console.log('error', error));
    };


    return (
        <div>


            <div className={style.containerPagamento}>
                <img src={YesRed} alt="" />

                <div className={style.titleConfir}>
                    <h2>Pagamento</h2>
                    <p>Escolha o método de pagamento de sua preferência</p>
                </div>

                <div className={style.bannerPedido}>
                    <div className={style.cartao}>
                        <div className={style.btmPagamento}>
                            <input type="checkbox"

                                checked={datas.forma_pagamento === 3}
                                onChange={() => setDatas(prevObjeto => {
                                    return { ...prevObjeto, forma_pagamento: 3 };
                                })}

                                style={{ marginRight: '5px' }} // Estilos inline para o checkbox
                            />
                            <label htmlFor="PIX"> PIX</label>

                        </div>
                        <div className={style.btmPagamento}>
                            <input type="checkbox"

                                checked={datas.forma_pagamento === 1}
                                onChange={() => setDatas(prevObjeto => {
                                    return { ...prevObjeto, forma_pagamento: 1 };
                                })}

                                style={{ marginRight: '5px' }} // Estilos inline para o checkbox
                            />
                            <label htmlFor="Cartão de Crédito"> Cartão de Crédito</label>
                        </div>
                        <div className={style.btmPagamento}>
                            <input type="checkbox"

                                checked={datas.forma_pagamento === 2}
                                onChange={() => setDatas(prevObjeto => {
                                    return { ...prevObjeto, forma_pagamento: 2 };
                                })}

                                style={{ marginRight: '5px' }} // Estilos inline para o checkbox
                            />
                            <label htmlFor="Boleto"> Boleto</label>
                        </div>
                    </div>

                    <div className={style.resumo}>
                        <strong>Resumo do pedido</strong> <br />
                        <strong>Responsável da franquia</strong>
                        <p>Escola: {datas.unidade_id}</p>
                        <p>Nome: {datas.nome_responsavel}</p>
                        <p>RG: {datas.rg}</p>
                        <p>CPF: {datas.cpf_responsavel}</p>
                        <p>Data de Nascimento: {datas.data_nascimento}</p>
                        <p>Telefone: {datas.telefone}</p>
                        <p>Endereço Completo: {datas.rua}</p>
                        <p>Tamanho da Camisa: {datas.tamanho_camisa}</p>
                        <p>Acomodação: {datas.acomodacao}</p>
                    </div>

                </div>

                <div className={style.divBotao}>
                    <button onClick={(e) => SendParticipanteApi(e)} className={style.btmPedido}>FINALIZAR PEDIDO</button>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Pagamento;