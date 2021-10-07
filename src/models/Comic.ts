import {Url} from "./Url";
import {Image} from "./Image";

interface  TextObject {
    text: string,
    language: string
}

interface SeriesSummary {
    resourceURI: string,
    name: string
}

interface ComicPrice {
    type: "printPrice" | "digitalPrice",
    price: number
}

interface StorySummary {
    resourceURI: string,
    name: string,
    type: string
}

interface StoryList {
    available: number,
    returned: number,
    collectionURI: string,
    items: StorySummary[]
}

export interface Comic {
    "id": number,
    "digitalId": number,
    "title": string,
    "variantDescription": string,
    "description"?: string,
    "modified": Date,
    "pageCount": number,
    textObjects: TextObject[],
    "resourceURI": string,
    "urls": Url[],
    "series": SeriesSummary,
    "prices": ComicPrice[],
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
        "extension": "jpg"
    },
    "images": Image[],
    "stories": StoryList,
}
