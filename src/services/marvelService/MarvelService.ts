import {AllCharactersRes} from "./models/AllCharactersRes";
import {Character} from "../../models/Caracter";
import {useHttp} from "../../hooks/http.hook";

export const useMarvelService = () => {
    const { loading, request, error, clearError } = useHttp();
    const baseUrl = 'https://gateway.marvel.com:443/v1/public';
    const apiKey = process.env.REACT_APP_API_KEY;
    const baseOffset = 210;

    const getAllCharacters = async (offset: number = baseOffset): Promise<Character[]> => {
        let res = await request<AllCharactersRes>(`${baseUrl}/characters?limit=9&offset=${offset}&${apiKey}`);
        return res.data.results;
    }

    const getCharacterById = (id: number | string): Promise<Character> => {
        return request<AllCharactersRes>(`${baseUrl}/characters/${id}?${apiKey}`)
            .then(res => res.data.results[0]);
    }

    const getRandomCharacter = async (): Promise<Character> => {
        const randId = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        return await getCharacterById(randId);
    }

    return {loading, error, clearError, getAllCharacters, getCharacterById, getRandomCharacter};
}

