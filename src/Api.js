import axios from 'axios'


const api = axios.create({
    //baseURL Define a base do endereço para a chamada
    baseURL: 'http://localhost:3001/'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries)
export const updateSeries = (series) => api.put('series/'+series.id, series)
export const loadSeriesByGenre = (genre) => api.get('series?genre='+genre)
export const deleteSeries = (id) => api.delete('series/'+id)
export const loadSeriesById = (id) => api.get('series/'+id)
// todas as apis que serão utilizadas
// simplificação dos dados de consumo
const apis = {
    // carregamento dos generos
    loadGenres,
    saveSeries,
    updateSeries,
    loadSeriesByGenre,
    deleteSeries,
    loadSeriesById
}

export default apis