import axios from 'axios';
/*base url deve mudar para o ip de acesso do aplicativo
*padrão:
*http://localhost:3333
*casa
*http://192.168.3.4:3333
*serviço
*http://192.168.100.222:3333
*/
const api = axios.create({
    baseURL:'http://192.168.3.4:3333',
    headers:{'X-Custom-Header':'foobar'},
})

export default api;