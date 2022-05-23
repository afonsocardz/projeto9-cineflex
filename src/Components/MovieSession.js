import { Link } from "react-router-dom";
import ColumnContainer from "./Styles/ColumnContainer";
import FlexContainer from "./Styles/FlexContainer";
import styled from "styled-components";

export default function MovieSession({ session, user, setUser }) {
    const { showtimes } = session;
    return (
        <ColumnContainer padSide={"25px"}>
            <Span>{`${session.weekday} - ${session.date}`} </Span>
            <FlexContainer>
                {showtimes.map(showtime =>
                    <Link to={`/sessao/${showtime.id}`}>
                        <Button type="button" onClick={() => setUser(
                            {
                                ...user,
                                session: {
                                    id: showtime.id,
                                    date: session.date,
                                    weekday: session.weekday,
                                    time: showtime.name
                                }
                            })
                        }>{showtime.name}</Button>
                    </Link>
                )}
            </FlexContainer>
        </ColumnContainer>
    );
}

const Button = styled.button`
    width: 82px;
    height: 43px;
    margin: 23px 0;
    margin-right: 8px;
`;

const Span = styled.span`
    font-size: 20px;
    padding-bottom: 1px;
`;