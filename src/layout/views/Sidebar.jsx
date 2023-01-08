import { useContext } from 'react';
import { AuthContext } from '../../auth/context';
import { Link, useLocation } from 'react-router-dom';
import '../styles/views/sidebar.css';

export const Sidebar = () => {

  const { logout } = useContext( AuthContext );
  const { pathname } = useLocation();



  return (
    <div className='sidebar'>
      <ul className='body-sidebar'>

      <li className={(pathname === '/home') ? 'li-red red active' : 'li-red red' }>
          <Link to="/home" />Les teves comunitats
      </li>
      {
        (pathname !== '/home') && 
        (
          <>
            <li className={(pathname === '/comunity') ? 'li-red red active' : 'li-red red' }>
                <Link to="/comunity" />Comunitat
            </li>
            <li className={(pathname === '/phones') ? 'li-red red active' : 'li-red red' }>
                <Link to="/phones" />Telèfons d'interès
            </li>
            <li className={(pathname === '/providers') ? 'li-red red active' : 'li-red red' }>
                <Link to="/providers" />Proveïdors
            </li>
            <li className={(pathname === '/refurbishment') ? 'li-red red active' : 'li-red red' }>
                <Link to="/refurbishment" />Reformes
            </li>
            <li className={(pathname === '/meetings') ? 'li-red red active' : 'li-red red' }>
                <Link to="/meetings" />Juntes
            </li>
            <li className={(pathname === '/documents') ? 'li-red red active' : 'li-red red' }>
                <Link to="/documents" />Documents
            </li>
          </>
        )
      }
      <li className={`li-red red`}><Link to="/user" />Perfil d'usuari</li>
      <li className='li-blue blue'><Link to="/login" onClick={ logout }>Surt</Link></li>
      </ul>
    </div>
  )
}
