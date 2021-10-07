enum UrlTypes {
    detail = "detail",
    wiki = "wiki",
    comicLink = "comicLink",
    homePage = 'homePage'
}

export interface Url {
    type: UrlTypes,
    url: string
}
