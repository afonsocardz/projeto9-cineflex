import FlexContainer from "./Styles/FlexContainer";
import styled from "styled-components";


export default function PageTop({ route }) {

    function validateRoute(route) {

        if (route === "home") return "o filme";

        if (route === "movie") return "o horário";

        if (route === "session") return "o(s) assentos";

    }

    const text = validateRoute(route);

    return (
        <FlexContainer fontSize={"24px"} justify={"center"} height={"110px"}>
            <Title route={route}>{route !== "success" ? `Selecione ${text}` : "Pedido feito com sucesso!"}</Title>
        </FlexContainer>
    );
}

const Title = styled.span`
    color: ${props => props.route === "success" ? '#247A6B' : "inherit" };
    font-weight: ${props => props.route === "success" ? "bold" : "inherit" };
    text-align: center;
    width: ${props => props.route === "success" ? "250px" : "auto" };
`;