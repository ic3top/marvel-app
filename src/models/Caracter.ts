import {Url} from "./Url";
import {Image} from "./Image";

interface ComicSummary {
    /** resourceURI (string, optional): The path to the individual comic resource., */
    resourceURI?: string;
    /** name (string, optional): The canonical name of the comic. */
    name?: string;
}

interface ComicsList {
    /** available (int, optional): The number of total available issues in this list. Will always be greater than or equal to the "returned" value., */
    available: number;
    /** returned (int, optional): The number of issues returned in this collection (up to 20)., */
    returned?: number;
    /** collectionURI (string, optional): The path to the full list of issues in this collection., */
    collectionURI?: string;
    /** items (Array[ComicSummary], optional): The list of returned issues in this collection */
    items?: ComicSummary[];
}

// TODO
interface StoryList {}
interface EventList {}
interface SeriesList {}

export interface Character {
    /** id (int, optional): The unique ID of the character resource., */
    id: number;
    /** name (string, optional): The name of the character., */
    name: string;
    /** description (string, optional): A short bio or description of the character., */
    description: string;
    /** modified (Date, optional): The date the resource was most recently modified., */
    modified: Date;
    /** resourceURI (string, optional): The canonical URL identifier for this resource., */
    resourceURI: string;
    /** urls (Array[Url], optional): A set of public web site URLs for the resource., */
    urls: Url[];
    /** thumbnail (Image, optional): The representative image for this character., */
    thumbnail: Image;
    /** comics (ComicList, optional): A resource list containing comics which feature this character., */
    comics: ComicsList;
    /** stories (StoryList, optional): A resource list of stories in which this character appears., */
    stories: StoryList;
    /** events (EventList, optional): A resource list of events in which this character appears., */
    events: EventList;
    /** series (SeriesList, optional): A resource list of series in which this character appears. */
    series: SeriesList;
}
