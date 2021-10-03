import {Character} from "../../../models/Caracter";
import {DefaultRes} from "./DefaultRes";

export interface AllCharactersRes extends DefaultRes {
    data: {
        offset: number;
        limit: number;
        total: number;
        count: number;
        results: Character[]
    }
}
