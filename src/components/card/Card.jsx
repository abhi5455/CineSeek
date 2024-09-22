import './card.css'
import {Link} from "react-router-dom";
import {useEffect} from "react";

export default function Card({sourceLink,imbdId, clsName, path}) {
    function handleIMDB(){
        if(clsName!== "card3"){
            localStorage.setItem('currentMovieIMDB',imbdId);
        }
        return 1;
    }
    return(
        <Link to={path} onClick={handleIMDB} className={'cardDiv'} style={{position: "relative", maxHeight: "250px"}}>
            <img src={sourceLink} className={clsName} alt={'\u00A0'+'N/A'}></img>
        </Link>
    )
}