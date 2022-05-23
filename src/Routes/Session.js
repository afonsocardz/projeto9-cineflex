import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Seat from "../Components/Seat";
import Footer from "../Components/Footer";
import PageTop from "../Components/PageTop";
import FlexContainer from "../Components/Styles/FlexContainer";
import ColumnContainer from "../Components/Styles/ColumnContainer";
import styled from "styled-components";

export default function Session({ user, setUser }) {
    const [seats, setSeats] = useState([]);
    const [name, setName] = useState("");
    const [userId, setUserId] = useState("");
    const { sessionId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)
        promise.then(res => {
            console.log(res.data)
            setSeats(res.data)
        });

    }, [sessionId])

    function formHandler(e) {
        e.preventDefault();

        setUser({ ...user, name: name, id: userId });

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

    function validateCPF(value) {
        return setUserId(value
            .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
            .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1'))
    }

    console.log(seats);

    return (
        <div>
            <PageTop route={"session"} />
            <Container>
                <SeatContainer>
                    {seats.length !== 0 ? seats.seats.map((seat, index) => {
                        const selected = user.seats.some(userSeat => seat.id === userSeat.id);
                        return <Seat seat={seat} key={index} selected={selected} user={user} setUser={setUser} />
                    }) : <></>}
                </SeatContainer>
                <Form onSubmit={formHandler}>
                    <ColumnContainer>
                        <label>Nome do comprador:</label>
                        <Input type={"name"} placeholder={"Digite seu nome"} value={name} onChange={(e) => setName(e.target.value)} />
                    </ColumnContainer>
                    <ColumnContainer>
                        <label>CPF do comprador:</label>
                        <Input pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}" maxLength={14} type={"id"} placeholder={"Digite seu CPF"} value={userId} onChange={(e) => validateCPF(e.target.value)} />
                    </ColumnContainer>
                    <FlexContainer justify={"center"}>
                        <Button type="submit">Reservar Assentos</Button>
                    </FlexContainer>
                </Form >
            </Container>
            {seats.length !== 0 ? <Footer url={seats.movie.posterURL} title={seats.movie.title} weekday={seats.day.weekday} time={seats.name} /> : <></>}
        </div >
    );
}

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SeatContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Container = styled.div`
    width: 334px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
`;

const Input = styled.input`
    border: 1px solid #D4D4D4;
    padding: 18px;
    margin-bottom: 7px;
    ::placeholder{
        color: #AFAFAF;
        font-family: 'Roboto', sans-serif;
    }
`;

const Button = styled.button`
    width: 225px;
    height: 42px;
    margin-top: 57px;
    margin-bottom: 30px;
`;