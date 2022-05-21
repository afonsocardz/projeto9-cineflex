import FlexContainer from "./Styles/FlexContainer";


export default function PageTop({ route }) {

    function validateRoute(route) {

        if (route === "home") return "o filme";

        if (route === "movie") return "o horário";

        if (route === "session") return "o(s) assentos";

    }

    const text = validateRoute(route);

    return (
        <FlexContainer fontSize={"24px"} justify={"center"} height={"110px"}>
            <span>{route !== "success" ? `Selecione ${text}` : "Pedido feito com sucesso!"}</span>
        </FlexContainer>
    );
}