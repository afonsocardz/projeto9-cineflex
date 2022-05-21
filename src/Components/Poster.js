import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Poster({ url, id, name }) {
    return (
        <Link to={`/filme/${id}`}>
            <Frame>
                <ImageContainer>
                    <img src={url} alt={name} />
                </ImageContainer>
            </Frame>
        </Link>
    );
}

const Frame = styled.div`
    display: flex;
    border-radius: 3px;
    width: 145px;
    height: 209px;
    margin: 0 15px 8px 15px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
`;

const ImageContainer = styled.div`
    width: 100%;
    padding: 8px;
    object-fit: cover;

    img{
        width: 100%;
    }
`;