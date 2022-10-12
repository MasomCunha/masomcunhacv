import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import {
    BrowserRouter,
} from "react-router-dom";
//hooks
import { useAppSelector } from "../hooks/useAppSelector";


export default function Routes() {

    //will use store to control routes
    const isLogged = useAppSelector((state) => state.auth.isLogged);

    return (
        <BrowserRouter>{
            isLogged ? <PrivateRoutes /> : <PublicRoutes />
        }
        </BrowserRouter>
    )

}