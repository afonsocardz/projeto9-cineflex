import styled from "styled-components";

const Frame = styled.div`
    display: flex;
    border-radius: 3px;
    width: ${props => props.size ? props.size : "145px"};
    height: auto;
    margin: 0 15px 8px 15px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    background-color: white;
`;

export const ImageContainer = styled.div`
    width: 100%;
    padding: 8px;
    object-fit: cover;

    img{
        width: 100%;
    }
`;

export default Frame;
