import {DefaultRes} from "./DefaultRes";
import {Comic} from "./Comic";

export interface AllComicsRes extends DefaultRes {
    data: {
        "offset": number,
        "limit": number,
        "total": number,
        "count": number,
        "results": Comic[]
    }
}
