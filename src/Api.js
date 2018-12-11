import axios from 'axios'


const api = axios.create({
    //baseURL Define a base do endereço para a chamada
    baseURL: 'http://localhost:3001/'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries)
export const loadSeriesByGenre = (genre) => api.get('series?genre='+genre)
export const deleteSeries = (id) => api.delete('series/'+id)
// todas as apis que serão utilizadas
// simplificação dos dados de consumo
const apis = {
    // carregamento dos generos
    loadGenres: loadGenres,
    saveSeries: saveSeries,
    loadSeriesByGenre : loadSeriesByGenre,
    deleteSeries: deleteSeries
}

export default apis