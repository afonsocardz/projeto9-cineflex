import styled from "styled-components";

export default function Seat({ seat, seats, setSeats, color, index}) {


    //let color = seat.isAvailable === true ? defaultColor : notAvailableColor;

    //if (selected) color = selectedColor;    
    function addSeat(id, isSelect) {
        const temp = (seats.seats.map((seat, index) => {
            if(index === id){
                return {...seat, isSelected: !isSelect};
            }
            return {...seat};      
        }))
        setSeats({...seats, seats: temp})
    }

    function handleUnavailable(){
        alert("Esse assento não está disponível")
    }

    return (
        <SeatContainer colorStatus={color} onClick={seat.isAvailable ? () => addSeat(index, seat.isSelected ) : handleUnavailable }>
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
    background-color: ${props => props.colorStatus.background } ;
    border: 1px solid ${props => props.colorStatus.border };
    border-radius: 12px;
    font-size: 11px;
    margin: 0 3.5px 19px 3.5px;
    cursor: pointer;
`;
