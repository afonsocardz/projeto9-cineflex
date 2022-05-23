import PageTop from "../Components/PageTop";
import ColumnContainer from "../Components/Styles/ColumnContainer";

export default function Success({ user, setUser }) {
    return (
        <div>
            <PageTop route={"success"} />
            <ColumnContainer>
                <span>Filme e Sessão</span>
                <span>{user.movie.title}</span>
                <span>{user.session.date} {user.session.time}</span>
            </ColumnContainer>
            <ColumnContainer>
                <span>Ingressos</span>
                {user.seats.map(seat => <span>Assento {seat.name}</span>)}
            </ColumnContainer>
            <ColumnContainer>
                <span>Comprador</span>
                <span>Nome: {user.name}</span>
                <span>CPF: {user.id}</span>
            </ColumnContainer>

        </div>
    );
}