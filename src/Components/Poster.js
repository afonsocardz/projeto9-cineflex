import { Link } from "react-router-dom";

export default function Poster({ url, id, name }) {
    return (
        <Link to={`/filme/${id}`}>
            <div>
                <div>
                    <img src={url} alt={name} />
                </div>
            </div>
        </Link>
    );
}