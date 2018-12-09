import axios from 'axios'


const api = axios.create({
    //baseURL Define a base do endereço para a chamada
    baseURL: 'http://localhost:3001/'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries)

// todas as apis que serão utilizadas
// simplificação dos dados de consumo
const apis = {
    // carregamento dos generos
    loadGenres: loadGenres,
    saveSeries: saveSeries
}

export default apis