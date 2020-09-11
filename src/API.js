import axios from 'axios';

/* fetch for test */
const baseURL = 'https://rickandmortyapi.com/api/';
export class ApiFetch {
  getAllCharacters = async () => {
    const response = await fetch(`${baseURL}character`);
    const body = await response.json();
    const result = body.results;
    return result;
  };
}
/* END fetch for test */

export default class Api {
  instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/',
  });

  getCharactersInfoByPage = async (pageNumber = null) => {
    const response = pageNumber
      ? await this.instance.get(`character/?page=${pageNumber}`)
      : await this.instance.get('character');
    const result = response.data;
    return result;
  };

  getEpisodesInfoByPage = async (pageNumber = null) => {
    const response = pageNumber
      ? await this.instance.get(`episode?page=${pageNumber}`)
      : await this.instance.get('episode');
    const result = response.data;
    return result;
  };

  getLocationsInfoByPage = async (pageNumber = null) => {
    const response = pageNumber
      ? await this.instance.get(`location?page=${pageNumber}`)
      : await this.instance.get('location');
    const result = response.data;
    return result;
  };

  getCharacter = async (id) => {
    const response = await this.instance.get(`character/${id}`);
    const result = response.data;
    return result;
  };

  getMultipleCharacters = async (num) => {
    const response = await this.instance.get(`character/${num}`);
    const result = response.data;
    return result;
  };

  getEpisode = async (id) => {
    const response = await this.instance.get(`episode/${id}`);
    const result = response.data;
    return result;
  };

  getEpisodeName = async (url) => {
    this.instance.defaults.baseURL = '';
    const response = await this.instance.get(url);
    const result = response.data.name;
    this.instance.defaults.baseURL = 'https://rickandmortyapi.com/api/';
    return result;
  };
}
