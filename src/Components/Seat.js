import styled from "styled-components";

export default function Seat({ seat, selected, user, setUser }) {

    const { seats: userSeats } = user;

    const defaultColor = "#C3CFD9";
    const notAvailableColor = "#FBE192";
    const selectedColor = "#8DD7CF";

    let color = seat.isAvailable === true ? defaultColor : notAvailableColor;

    if (selected) color = selectedColor;
    
    function addSeat() {
        const check = userSeats.some(userSeat => seat.id === userSeat.id);
        check ? (userSeats.pop(seat)) : userSeats.push(seat);
        setUser(
            {
                ...user,
                seats: [...userSeats]
            }
        );
    }

    return (
        <SeatContainer colorStatus={color} onClick={seat.isAvailable ? () => addSeat() : null}>
            <span>{seat.name}</span>
        </SeatContainer>
    );
}

const SeatContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    background-color: ${props => props.colorStatus } ;
    border: 1px solid #808F9D;
    border-radius: 12px;
    font-size: 11px;
    margin: 0 3.5px 19px 3.5px;
    pointer-events: ${props => props.colorStatus === "#FBE192" ? "none" : "initial"};
    cursor: pointer;
`;
