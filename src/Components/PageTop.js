export default function PageTop({route}){

    function validateRoute(route){

        if (route === "home") return "o filme";

        if (route === "movie") return "o horário";

        if (route === "session") return "o(s) assentos";
        
    }

    const text = validateRoute(route);


    
    return(
        <div className={route}>
            <span>{route !== "success" ? `Selecione ${text}` : "Pedido feito com sucesso!"}</span>
        </div>
    );
}