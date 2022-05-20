import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Movie from "./Routes/Movie";
import Session from "./Routes/Session";
import Success from "./Routes/Success";

const userObj = {
    name: null,
    id: null,
    movie: {
        id: null,
        title: null,
    },
    seats: [],
    session: {
        id: null,
        weekday: null,
        time: null
    }
}

export default function App() {

    const [user, setUser] = useState(userObj);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home userMovie={...user.movie} setUser={setUser} />} />
                <Route path="/filme:movieId" element={<Movie />} />
                <Route path="/sessao:sessionId" element={<Session />} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
        </BrowserRouter>
    );
}