import styled  from "styled-components";

const FlexContainer = styled.div`
    width: 100%;
    height: ${props => props.height ? props.height : "auto" };
    display: flex;
    align-items: center;
    margin: auto;
    flex-wrap: ${props => props.wrap ? "wrap" : "nowrap"};
    justify-content: ${props => props.justify ? props.justify : "start"};
    font-size: ${props => props.fontSize ? props.fontSize : "18px"};
    color: ${props => props.color ? props.color : "#293845"};
    text-transform: ${props => props.upperCase ? "uppercase" : "none" };
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "white" };
`;

export default FlexContainer;