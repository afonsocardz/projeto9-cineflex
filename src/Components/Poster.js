import { Link } from "react-router-dom";
import styled from "styled-components";
import Frame, { ImageContainer } from "./Styles/PosterContainer";

export default function Poster({ url, id, name, size }) {

    if (size === "small") size = "64px";
    return (

        <Frame size={size}>
            <ImageContainer>
                <img src={url} alt={name} />
            </ImageContainer>
        </Frame>

    );
}
