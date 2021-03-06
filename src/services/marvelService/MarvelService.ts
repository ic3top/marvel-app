import { AllCharactersRes } from '../../models/AllCharactersRes';
import { Character } from '../../models/Caracter';
import { useHttp } from '../../hooks/http.hook';
import { AllComicsRes } from '../../models/AllComicsRes';
import { Comic } from '../../models/Comic';

export const useMarvelService = () => {
  const {
    request, clearError, stage, setStage,
  } = useHttp();
  const baseUrl = 'https://gateway.marvel.com:443/v1/public';
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseCharOffset = 210;
  const baseComicsOffset = 0;

  const getAllCharacters = async (offset: number = baseCharOffset): Promise<Character[]> => {
    const res = await request<AllCharactersRes>(`${baseUrl}/characters?limit=9&offset=${offset}&${apiKey}`);
    return res.data.results;
  };

  const getCharacterById = (id: number | string): Promise<Character> => request<AllCharactersRes>(`${baseUrl}/characters/${id}?${apiKey}`)
    .then((res) => res.data.results[0]);

  const getRandomCharacter = async (): Promise<Character> => {
    const randId = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    return getCharacterById(randId);
  };

  const getAllComics = async (offset = baseComicsOffset): Promise<Comic[]> => request<AllComicsRes>(`${baseUrl}/comics?orderBy=issueNumber%2Cmodified&limit=8&offset=${offset}&${apiKey}`)
    .then((res) => res.data.results);

  const getComicById = async (id: string | number): Promise<Comic> => request<AllComicsRes>(`${baseUrl}/comics/${id}?${apiKey}`)
    .then((res) => res.data.results[0]);

  return {
    clearError,
    stage,
    setStage,
    getAllCharacters,
    getCharacterById,
    getRandomCharacter,
    getAllComics,
    getComicById,
  };
};
