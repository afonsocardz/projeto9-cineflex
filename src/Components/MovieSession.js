import { Link } from "react-router-dom";

export default function MovieSession({ session, user, setUser }) {
    const { showtimes } = session;
    return (
        <div>
            <span>{`${session.weekday} - ${session.date}`} </span>
            {showtimes.map(showtime =>
                <Link to={`/sessao/${showtime.id}`}>
                    <button type="button" onClick={() => setUser(
                        {
                            ...user,
                            session: {
                                id: showtime.id,
                                date: session.date,
                                weekday: session.weekday,
                                time: showtime.name
                            }
                        })
                    }>{showtime.name}</button>
                </Link>
            )}
        </div>
    );
}