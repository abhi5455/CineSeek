import './header.css'
import {useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";

export default function Header({searchFlag, setSearch}){
    const navigate = useNavigate();
    const searchBar = useRef();

    function goToSearch(){
        let searchValue= searchBar.current.value;
        searchBar.current.value=searchValue;
        localStorage.setItem('searchValue',searchValue);

        if(searchValue==="") {
            navigate("/");
            return 0;
        }
        let apiUrl="https://www.omdbapi.com/?s="+searchValue+"&plot=full&type=movie&page=1&r=json&apikey=42a70ba9"
        fetch(apiUrl)
        .then(response => response.json())
            .then(data => {
                if (data.totalResults > 10) {
                    const firstTenResults = data.Search.slice(0, 25);
                }
                setSearch(data.Search);
            })

        navigate('/search');
    }
    useEffect(() => {
        if(searchFlag!==false){
            searchBar.current.value = localStorage.getItem('searchValue');
            goToSearch();
        }
        if(searchFlag===true){
            searchBar.current.focus();
        }
    },[])

    return (
        <>
            <div className="header">
                <div className={'WatermarkBox'}>
                    <img src={'Icon.png'} alt="icon" style={{ opacity: .4 , height: '22px' }} />
                    <p className={'Watermark'}>CineSeek</p>
                </div>
                <div className={'search'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="#c4cad4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
                        <path d="M21 21l-6 -6"/>
                    </svg>
                    <input onChange={goToSearch} ref={searchBar} className={'searchBar'} placeholder={"Search by title"}>
                    </input>
                </div>
            </div>
        </>
    )
}