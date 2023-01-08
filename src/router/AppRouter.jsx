import { Route, Routes } from "react-router-dom";
import { Loginpage, Registerpage } from "../auth/pages";
import { PropietarispuntcatRoutes } from "../Propietarispuntcat";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/login" element={ 
              <PublicRoute>
                <Loginpage />
              </PublicRoute>
              } />
            <Route path="/register" element={
              <PublicRoute>
                <Registerpage />
              </PublicRoute>
            } />
            <Route path="/*" element={ 
              <PrivateRoute>
                <PropietarispuntcatRoutes />
              </PrivateRoute>
             } />
        </Routes>
    </>
  )
}
