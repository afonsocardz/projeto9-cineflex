import PageTop from "../Components/PageTop";

export default function Success({ user, setUser }) {
    return (
        <div>
            <PageTop route={"success"} />
            <div>
                <span>Filme e Sessão</span>
                <span>{user.movie.title}</span>
                <span>{user.session.date} {user.session.time}</span>
            </div>
            <div>
                <span>Ingressos</span>
                {user.seats.map(seat => <span>Assento {seat.name}</span>)}
            </div>
            <div>
                <span>Comprador</span>
                <span>Nome: {user.name}</span>
                <span>CPF: {user.id}</span>
            </div>

        </div>
    );
}