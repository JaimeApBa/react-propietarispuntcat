import { Navigate, Route, Routes } from "react-router-dom"
import { Advertisementpage,
          Comunitypage,
          Documentspage,
          Homecomunitypage,
          Meetingspage,
          Phonespage,
          Providerpage,
          Providerspage,
          Refurbishmentpage, 
          UserPage
        } from "../pages"

export const PropietarispuntcatRoutes = () => {
  return (
    <Routes>
        <Route path="/home" element={ <Homecomunitypage /> } />
        <Route path="/comunity/:nif" element={ <Comunitypage /> } />
        <Route path="/advertisement" element={ <Advertisementpage /> } />
        <Route path="/documents" element={ <Documentspage /> } />
        <Route path="/meetings" element={ <Meetingspage /> } />
        <Route path="/phones" element={ <Phonespage /> } />
        <Route path="/providers" element={ <Providerspage /> } />
        <Route path="/provider/:id" element={ <Providerpage /> } />
        <Route path="/refurbishment" element={ <Refurbishmentpage /> } />
        <Route path="/user" element={ <UserPage /> } />
        
        <Route path="/*" element={ <Navigate to="/home" />} />
        

    </Routes>
  )
}
