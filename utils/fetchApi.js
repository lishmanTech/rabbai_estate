import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


 export const fetchApi = async (url) => {
     const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'cb28e47fb8msh90a87968e79f039p1a1a7ejsn07491404e860',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
     })
     return data;
 }