export default function Footer({ url, title, ...otherProps }) {
    const { weekday, time } = { ...otherProps };
    return (
        <div>
            <img src={url} alt="Poster"/>
            <div>
                <span>{title}</span>
                {weekday ? <span>{weekday} - {time}</span> : <></>}
            </div>

        </div>
    );
}