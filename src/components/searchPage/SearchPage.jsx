import Header from "../header/Header.jsx";
import {useEffect, useRef, useState} from "react";
import './searchPage.css'
import Card from "../card/Card.jsx";

export default function SearchPage(){

    let [searchedResponse, setSearchedResponse] = useState(null);
    let [moviePoster, setMoviePoster] = useState([]);

    const bgPoster=useRef(null);
    useEffect(()=>{
        const handleWindowRefresh= ()=> {
            let choice = ['bgBatman', 'bgHulk', 'bgKungfuPanda', 'bgSpiderman', 'bgOnward_2', 'bgDeadpool', 'bgOnward'];
            let chosenRandomNum = JSON.parse(localStorage.getItem('chosenRandomNum'));

            let chosenImage = choice[chosenRandomNum] + '.png';
            bgPoster.current.style.backgroundImage = `url(${chosenImage})`;

        }
        handleWindowRefresh();
        window.addEventListener('load', handleWindowRefresh);
        return ()=>{
            window.removeEventListener('load', handleWindowRefresh);
        }
    },[])

    useEffect(() => {
        let arr=[]
        if(searchedResponse!=null) {
            searchedResponse.sort((a,b)=> b.Year-a.Year)
            for (let i = 0; i < searchedResponse.length; i++) {
                arr[i] = <Card clsName={'card2'} path={'/movie'} imbdId={searchedResponse[i].imdbID} sourceLink={searchedResponse[i].Poster}></Card>
            }
            setMoviePoster(arr);
        }
    }, [searchedResponse]);

    return (
        <>
            <div className={'mainDiv'}>
                <Header setSearch={setSearchedResponse} searchFlag={true}></Header>
                <div className={'backgroundPoster1'} ref={bgPoster}>
                </div>
                <div className={'cardContainer2'}>
                    {moviePoster}
                </div>
            </div>
        </>
    )
}