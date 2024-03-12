import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Filme from "./pages/filme";
import PageLayout from "./layouts/pageLayout";
import NotFound from "./pages/error";
import Favoritos from "./pages/favoritos";

const RoutesApp = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/filme/:id" element={<Filme />} />
                    <Route path="/favoritos" element={<Favoritos/>} />
                    <Route path="*" element={<NotFound/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;