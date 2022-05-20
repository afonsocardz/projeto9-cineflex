export default function MovieSession({session}){
    const {showtimes} = session;
    return(
        <div>
            <span>{`${session.weekday} - ${session.date}`} </span>
            {showtimes.map(showtime => <button type="button">{showtime.name}</button>)}
        </div>
    );
}