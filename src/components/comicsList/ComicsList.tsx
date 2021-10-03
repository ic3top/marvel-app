import { Link } from "react-router-dom";

import "./comicsList.scss";
import xMenImg from "../../resources/images/x-men.png";

export const ComicsList = () => {
    const data = [
        {
            img: xMenImg,
            name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
            price: "9.99$",
            id: 1
        },
        {
            img: xMenImg,
            name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
            price: "9.99$",
            id: 1
        },
        {
            img: xMenImg,
            name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
            price: "9.99$",
            id: 1
        },
        {
            img: xMenImg,
            name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
            price: "9.99$",
            id: 1
        },
        {
            img: xMenImg,
            name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
            price: "9.99$",
            id: 1
        },
        {
            img: xMenImg,
            name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB",
            price: "9.99$",
            id: 1
        },
    ];
    const comicsList = data.map(i => (
        <li className="comics__item" key={i.id}>
            <Link to={`comics/${i.id}`}>
                <img src={i.img} alt="ultimate war" className="comics__item-img"/>
                <div className="comics__item-name">{i.name}</div>
                <div className="comics__item-price">{i.price}</div>
            </Link>
        </li>
    ))
    return (
        <div className="comics__list">
            <ul className="comics__grid">
                {comicsList}
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}
