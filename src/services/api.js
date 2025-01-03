import axios from axios
const api = axios.create({
   baseURL: 'https://api.themoviedb.org/3/',
   params:{
       api_key: '2a51b144b0d9fcbadef79af09bd3e1f2',
       // language: 'en-US',
       language: 'pt-BR',
       page:1
    }
})
  export default api