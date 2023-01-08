import { useContext } from 'react';
import { AuthContext } from '../../auth/context';
import { Logo } from '../components';
import '../styles/views/navbar.css';

export const Navbar = () => {

  const { user } = useContext( AuthContext );

  return (
    <div className='navbar'>
        <Logo />

        <div className="userName">
            <p>Benvingut, <span className='blue'>{ user.name }</span></p>
        </div>
    </div>
  )
}
