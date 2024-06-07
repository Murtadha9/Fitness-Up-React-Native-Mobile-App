
import axios from 'axios';
import { rapidApiKey } from '@env';

const URLbase = 'https://exercisedb.p.rapidapi.com';

const apiCall=async(url,params)=>{
    try {
        const options={
            method:'GET',
            url,
            params,
            headers:{
                'x-rapidapi-key':rapidApiKey,
                'x-rapidapi-host':'exercisedb.p.rapidapi.com'
            }
        }
        const response=await axios.request(options)
        return response.data
    } catch (error) {
        console.log('error', error.message)
    }
}


export const fetchData = async (bodyPart) => {
    try {
        const data = await apiCall(`${URLbase}/exercises/bodyPart/${bodyPart}`);
        return data;
    } catch (error) {
        console.log('error', error.message);
    }
};


