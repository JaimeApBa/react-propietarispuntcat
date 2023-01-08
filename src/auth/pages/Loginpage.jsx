import { useContext, useState } from 'react';
import { AuthContext } from '../context';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useFetchUser } from '../hooks/useFetchUser';
import { Logo } from '../../layout/components/Logo';
import '../styles/pages/loginpage.css';
import { useEffect } from 'react';

export const Loginpage = () => {
  
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const { formState, email, password, onInputChange, onResetForm } = useForm({
      email: '',
      password: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false)

    const { data, hasError, getFetch } = useFetchUser('https://api-propietarispuntcat.onrender.com/api/login', formState);
    
    
    useEffect(() => {
      if(isSubmitted && !hasError && data ) {
        login(data);
        navigate('/home', { replace: true });
        setIsSubmitted(false);
      }
      else if(isSubmitted && hasError) {
        console.log('error', hasError);
        setIsSubmitted(false);
      }  
    }, [isSubmitted])
    
    
    const onSubmit = async () => {
      await getFetch()
      setIsSubmitted(true);
    }


  return (
    <div className="bg-container p-10">
      <Logo />

      <div className="card">
        <div className="card-body">
          <input
            type="email" 
            className='form-control'
            placeholder='Correu Electrònic'
            name='email'
            value={ email }
            onChange={ onInputChange }
          />

          <input
            type="password" 
            className='form-control'
            placeholder='Contrasenya'
            name='password'
            value={ password }
            onChange={ onInputChange }
          />
          <p className="password-forgotten"><Link to="/">Has oblidat la contrasenya?</Link></p>

          <button
            className='btn'
            onClick={ onSubmit }
          >Entrar</button>

          <p className='gray mb-0'>No estas encara registra't,</p>
          <p className='underline mt-0'><Link to="/">Crea un nou usuari</Link></p>

        </div>
      </div>
    
    </div>
  )
}
