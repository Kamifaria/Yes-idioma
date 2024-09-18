import axios from "axios";

const api = axios.create({
  baseURL: "https://api.yes.com.br/api/ApiConvecao",
  headers: { "X-Custom-Header": "foobar" , 'Access-Control-Allow-Origin': '*', },
});

export { api };
