import {styled} from "styled-components";

export default function Seat({ seat, user, setUser }) {

    const {seats} = user;

    function addSeat(id) {
        seats.some(seat => seat.id === id) ? seats.pop(seat) : seats.push(seat);
        setUser(
            {
                ...user,
                seats: [...seats]
            }) 
    }

    return (
        <div className={`${seat.isAvailable}`} onClick={!seat.isAvailable ? () => addSeat(seat.id): null}>
            <span>{seat.name}</span>
        </div>
    );
}
