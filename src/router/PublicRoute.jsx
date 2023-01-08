import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {

    const isLogged = localStorage.getItem('token');

    return (isLogged)
        ? <Navigate to="/home" />
        : children

}
