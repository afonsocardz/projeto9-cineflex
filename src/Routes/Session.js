import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Seat from "../Components/Seat";
import Footer from "../Components/Footer";
import PageTop from "../Components/PageTop";

export default function Session({user, setUser}){
    const [seats, setSeats] = useState([]);
    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const {sessionId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)
        promise.then(res => {
            console.log(res.data.seats)
            setSeats(res.data.seats)
        });

    }, [sessionId])

    function formHandler(e){
        e.preventDefault();

        setUser({...user,name:name, id:userId });

        const body = {
            ids: user.seats.map(seat => seat.id),
            name: name,
            id: userId,
        }

        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body);

        promise.then(res => {
            navigate("/sucesso")
        })

    }

    return(
        <div>
            <PageTop route={"session"}/>
            {seats.length !== 0 ? seats.map(seat => <Seat seat={seat} user={user} setUser={setUser} />) : <></>}
            <form onSubmit={formHandler}>
                <label>Nome:</label>
                <input type={"name"} placeholder={"Digite seu nome"} value={name} onChange={(e) => setName(e.target.value)}/>
                <label>CPF:</label>
                <input type={"id"} placeholder={"Digite seu CPF"} value={userId} onChange={(e) => setUserId(e.target.value)}/>
                <button type="submit">Reservar Assentos</button>
            </form>
            <Footer url={user.movie.url} title={user.movie.title} weekday={user.session.weekday} time={user.session.time}/>
        </div>
    );
}