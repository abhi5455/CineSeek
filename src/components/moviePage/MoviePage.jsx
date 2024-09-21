import Header from "../header/Header.jsx";
import {useEffect, useRef, useState} from "react";
import './moviePage.css'
import Card from "../card/Card.jsx";

export default function MoviePage(){

    const bgPoster=useRef(null);
    let [currentMovie, setCurrentMovie] = useState(null);

    useEffect(()=>{
        const handleWindowRefresh= ()=> {
            let choice = ['bgBatman', 'bgHulk', 'bgKungfuPanda', 'bgSpiderman', 'bgOnward_2', 'bgDeadpool', 'bgOnward'];
            let chosenRandomNum = JSON.parse(localStorage.getItem('chosenRandomNum'));

            let chosenImage = choice[chosenRandomNum] + '.png';
            bgPoster.current.style.backgroundImage = `url(${chosenImage})`;
        }
        handleWindowRefresh();
        window.addEventListener('load', handleWindowRefresh);
        let currentMovieimdb=localStorage.getItem('currentMovieIMDB');
        let apiUrl="https://www.omdbapi.com/?i="+currentMovieimdb+"&plot=full&type=movie&r=json&apikey=42a70ba9"
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setCurrentMovie(data);
                localStorage.setItem('currentMovie', data.Title.toString());
                localStorage.setItem('currentMoviePoster', data.Poster.toString());
                localStorage.setItem('currentMovieYear', data.Year.toString());
                localStorage.setItem('currentMovieDirector', data.Director.toString());
                localStorage.setItem('currentMovieWriter', data.Writer.toString());
                localStorage.setItem('currentMovieActors', data.Actors.toString());
                localStorage.setItem('currentMovieReleased', data.Released.toString());
                localStorage.setItem('currentMovieLanguage', data.Language.toString());
                localStorage.setItem('currentMovieGenre', data.Genre.toString());
                localStorage.setItem('currentMoviePlot', data.Plot.toString());
                localStorage.setItem('currentMovieimdbRating', data.imdbRating.toString());
                localStorage.setItem('currentMovieLanguage', data.Language.toString());
                localStorage.setItem('currentMovieMetascore', data.Metascore.toString());
                localStorage.setItem('currentMovieimdbID', data.imdbID.toString());
                localStorage.setItem('currentMovieBoxOffice', data.BoxOffice.toString());
                localStorage.setItem('currentMovieAwards', data.Awards.toString());
            })

        return ()=>{
            window.removeEventListener('load', handleWindowRefresh);
        }
    },[])

    return (
        <>
            <div className={'mainDiv'}>
                <Header searchFlag={false}></Header>
                <div className={'backgroundPoster1'} ref={bgPoster}>
                </div>
                <button className={'backButton'} onClick={()=> window.history.back()}>back</button>
                <div className={'cardContainer3'}>
                    <div className={'posterDiv'}>
                        <Card clsName={'card3'}
                              sourceLink={localStorage.getItem('currentMoviePoster')}></Card>
                        <p style={{textShadow: "5px 5px 20px #000"}}>{localStorage.getItem('currentMovie')}</p>
                    </div>
                    <div className={'contentDiv'}>
                        <h3>Year: </h3>
                        <p>{localStorage.getItem('currentMovieYear')}</p>
                    </div>
                    <div className={'contentDiv'}>
                        <h3>Director: </h3>
                        <p>{localStorage.getItem('currentMovieDirector')}</p>
                    </div>
                    <div className={'contentDiv'}>
                        <h3>Writer: </h3>
                        <p>{localStorage.getItem('currentMovieWriter')}</p>
                    </div>
                    <div className={'contentDiv'}>
                        <h3>Release Date: </h3>
                        <p>{localStorage.getItem('currentMovieReleased')}</p>
                    </div>
                    <div className={'contentDiv'}>
                        <h3>Language: </h3>
                        <p>{localStorage.getItem('currentMovieLanguage')}</p>
                    </div>
                    <div className={'contentDiv'}>
                        <h3>Genre: </h3>
                        <p>{localStorage.getItem('currentMovieGenre')}</p>
                    </div>
                    <div className={'contentDiv'}>
                        <h3>Overview: </h3>
                        <p>{localStorage.getItem('currentMoviePlot')}</p>
                    </div>
                    <div className={'contentDiv'}>
                        <h3>Stars: </h3>
                        <p>{localStorage.getItem('currentMovieActors')}</p>
                    </div>
                    <div className={'contentDiv'}>
                        <h3>imdb rating: </h3>
                        <p>{localStorage.getItem('currentMovieimdbRating')}</p>
                    </div>
                    <div className={'contentDiv'}>
                        <h3>Metascore: </h3>
                        <p>{localStorage.getItem('currentMovieMetascore')}</p>
                    </div>
                    <div className={'contentDiv'}>
                        <h3>imdb id: </h3>
                        <p>{localStorage.getItem('currentMovieimdbID')}</p>
                    </div>
                    <div className={'contentDiv'}>
                        <h3>Box office Collection: </h3>
                        <p>{localStorage.getItem('currentMovieBoxOffice')}</p>
                    </div>
                    <div className={'contentDiv'}>
                        <h3>Awards: </h3>
                        <p>{localStorage.getItem('currentMovieAwards')}</p>
                    </div>
                </div>
            </div>
        </>
    )
}