import axios from "axios";

const key="7c01713e006a464ea4ca8d64949604e7";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key)

export default {
    getGenreList
}