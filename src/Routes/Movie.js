import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieSession from "../Components/MovieSession";
import PageTop from "../Components/PageTop";
import Footer from "../Components/Footer";

export default function Movie({ user, setUser }) {
    const [sessions, setSessions] = useState([]);
    const { movieId } = useParams();


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);
        promise.then(response => {
            setSessions(response.data)
        });

    }, [movieId]);

    return (
        <>
            <PageTop route="movie" />
            <div>
                {sessions.length !== 0 ? sessions.days.map(day => <MovieSession session={day} user={user} setUser={setUser} />) : <></>}
            </div>
            <Footer url={user.movie.url} title={user.movie.title} />
        </>

    );
}