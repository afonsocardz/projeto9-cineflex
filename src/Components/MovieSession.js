import { Link } from "react-router-dom";
import ColumnContainer from "./Styles/ColumnContainer";
import FlexContainer from "./Styles/FlexContainer";

export default function MovieSession({ session, user, setUser }) {
    const { showtimes } = session;
    return (
        <ColumnContainer padSide={"25px"}>
            <span>{`${session.weekday} - ${session.date}`} </span>
            <FlexContainer>
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
            </FlexContainer>
        </ColumnContainer>
    );
}