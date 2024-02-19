import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./home";
import Country from "./country";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact element={<Home/>} path="/" />

                <Route exact element={<Country/>} path="/countries/:country" />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
