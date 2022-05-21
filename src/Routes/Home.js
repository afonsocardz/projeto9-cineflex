import { useEffect, useState } from "react";
import axios from "axios";
import Poster from "../Components/Poster";
import PageTop from "../Components/PageTop";
import FlexContainer from "../Components/Styles/FlexContainer";
import { Link } from "react-router-dom";

export default function Home({ user, setUser }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            console.log(response);
            setMovies(response.data)
        });

    }, []);

    return (
        <>
            <PageTop route={"home"} />
            <FlexContainer wrap={true} justify={"center"}>
                {movies.map(movie =>

                    <div onClick={() => setUser({ ...user, movie: { id: movie.id, title: movie.title, url: movie.posterURL } })}>
                        <Link to={`/filme/${movie.id}`}>
                        <Poster url={movie.posterURL} name={movie.title} />
                        </Link>
                    </div>

                )}
            </FlexContainer>
        </>
    );
}