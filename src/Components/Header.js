import styled from "styled-components";
import FlexContainer from "./Styles/FlexContainer";


export default function Header() {
    return (
        <FlexContainer
            justify={"center"}
            fontSize={"34px"}
            color={"#E8833A"}
            upperCase={true}
            backgroundColor={"#C3CFD9"}
            height={"67px"}
        >
            <span>Cineflex</span>
        </FlexContainer>
    );
}