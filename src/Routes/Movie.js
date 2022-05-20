import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

export default function Movie({id, title, setUser}){
    const [sessions, setSessions] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);
        promise.then(response => {
            console.log(response)
            setSessions(response.data.days)
        });

    }, []);
    
    return(
        <div>
            {sessions.map(day=> <span>{day.weekday}</span>)}
        </div>
    );
}