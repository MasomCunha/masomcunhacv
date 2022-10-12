import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import {
    BrowserRouter,
} from "react-router-dom";


export default function Routes() {

    //will use store to control routes
    const isLogged = false;

    return (
        <BrowserRouter>{
            isLogged ? <PrivateRoutes /> : <PublicRoutes />
        }
        </BrowserRouter>
    )

}