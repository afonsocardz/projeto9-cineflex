import PageTop from "../Components/PageTop";
import ColumnContainer from "../Components/Styles/ColumnContainer";
import FlexContainer from "../Components/Styles/FlexContainer";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function Success({ user, setUser }) {

    const navigate = useNavigate();

    function backHome(){
        setUser({
            name: null,
            id: null,
            movie: {
                id: null,
                title: null,
                url: null,
            },
            seats: [],
            session: {
                id: null,
                date: null,
                weekday: null,
                time: null
            }
        })
        navigate("/");
    }
    return (
        <ColumnContainer padSide={"28px"}>
            <PageTop route={"success"} />
            <ColumnContainer margin={"16px 0"}>
                <Title>Filme e Sessão</Title>
                <Span>{user.movie.title}</Span>
                <Span>{user.session.date} {user.session.time}</Span>
            </ColumnContainer>
            <ColumnContainer margin={"16px 0"}>
                <Title>Ingressos</Title>
                {user.seats.map(seat => <Span>Assento {seat.name}</Span>)}
            </ColumnContainer>
            <ColumnContainer margin={"16px 0"}>
                <Title>Comprador</Title>
                <Span>Nome: {user.name}</Span>
                <Span>CPF: {user.id}</Span>
            </ColumnContainer>

            <FlexContainer justify={"center"}>

                <Button onClick={backHome}>Voltar pra Home</Button>

            </FlexContainer>
        </ColumnContainer>
    );
}

const Button = styled.button`
    margin-top: 72px;
    width: 225px;
    height: 42px;
`;

const Title = styled.span`
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 7px;
`;

const Span = styled.span`
    font-size: 20px;
`;