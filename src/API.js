import axios from 'axios';

/*const baseURL = 'https://rickandmortyapi.com/api/';
export class ApiFetch {
    getAllCharacters = async () => {
        const response = await fetch(`${baseURL}character`);
        const body = await response.json();
        const result = body.results;
        return result;
    }
}*/

export default class Api {

    instance = axios.create({
        baseURL: 'https://rickandmortyapi.com/api/'
    });

    getAllCharacters = async () => {
        const response = await this.instance.get('character');
        const result = response.data.results;
        return result;
    }

    getCharacter = async (id) => {
        const response = await this.instance.get(`character/${id}`);
        const result = response.data;
        return result;
    }

    getEpisodeName = async (url) => {
        this.instance.defaults.baseURL = "";
        const response = await this.instance.get(url);
        const result = response.data.name;
        return result
    }
}