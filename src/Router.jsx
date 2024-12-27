import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";
import App from "./App";
import Home from "./Content/Home/Home";
import RecipiePage from "./Content/RecipiePage/RecipiePage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="recipies/:recipieID" element={<RecipiePage />} />
        </Route>
        
    )
)