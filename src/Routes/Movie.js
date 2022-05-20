import {useEffect, useState} from "react";
import axios from "axios";

export default function Movie({id, title, setUser}){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            setMovies(response.data.items)
        })

    }, [])
    
    return(
        
    );
}