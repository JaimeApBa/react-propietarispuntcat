import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    
    const isLogged = localStorage.getItem('token');

    return (isLogged)
      ? children
      : <Navigate to="/login" />
}
