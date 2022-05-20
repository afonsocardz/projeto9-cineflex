import { useEffect, useState } from "react";
import axios from "axios";

export default function Home({id, title, setUser}) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            console.log(response);
            setMovies(response.data)
        });

    }, []);

    return (
        <div>
            {movies.map(movie => <img src={movie.posterURL} />)}
        </div>
    );
}