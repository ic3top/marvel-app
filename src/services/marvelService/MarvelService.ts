import {AllCharactersRes} from "./models/AllCharactersRes";
import {Character} from "../../models/Caracter";

export class MarvelService {
    private baseUrl = 'https://gateway.marvel.com:443/v1/public';
    private apiKey = process.env.REACT_APP_API_KEY;
    private baseOffset = 210;

    private getResource = async <T> (url: string): Promise<T> => {
        const res = await fetch(url);

        if (!res.ok) {
            throw Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    public async getAllCharacters(offset: number = this.baseOffset): Promise<Character[]> {
        let res = await this.getResource<AllCharactersRes>(
            `${this.baseUrl}/characters?limit=9&offset=${offset}&${this.apiKey}`
        );
        return res.data.results;
    }

    public getCharacterById(id: number | string): Promise<Character> {
        return this.getResource<AllCharactersRes>(
            `${this.baseUrl}/characters/${id}?${this.apiKey}`
        ).then(res => res.data.results[0]);
    }

    public async getRandomCharacter(): Promise<Character> {
        const randId = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        const res = await this.getCharacterById(randId);
        return res;
    }
}

