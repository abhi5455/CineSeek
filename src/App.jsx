import './app.css'
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import {useEffect, useRef} from "react";
function App() {

    const bgPoster=useRef(null);
    useEffect(()=>{
        const handleWindowRefresh= ()=> {
            let choice = ['bgBatman', 'bgHulk', 'bgKungfuPanda', 'bgSpiderman', 'bgOnward_2', 'bgDeadpool', 'bgOnward'];
            let randomNumber = Math.floor(Math.random() * 7);
            let chosenRandomNum = JSON.parse(localStorage.getItem('chosenRandomNum'));
            if (chosenRandomNum === null || chosenRandomNum === randomNumber) {
                randomNumber = (randomNumber + 1) % 5;
            }

            let chosenImage = choice[randomNumber] + '.png';
            bgPoster.current.style.backgroundImage = `url(${chosenImage})`;
            localStorage.setItem('chosenRandomNum', randomNumber.toString());
            localStorage.setItem('searchValue',"");
        }
        handleWindowRefresh();
        window.addEventListener('load', handleWindowRefresh);
        return ()=>{
            window.removeEventListener('load', handleWindowRefresh);
        }
    },[])/**/
    return (
        <>
            <div className={'mainDiv'}>
                <Header></Header>
                <div className={'backgroundPoster'} ref={bgPoster}>
                </div>
                <h1>Discover Your <br />Next Favorite Movie</h1>
                <Footer></Footer>
            </div>
        </>
    )
}

export default App
