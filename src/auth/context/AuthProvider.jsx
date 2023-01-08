import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./"
import { AuthReducer } from "./"

export const AuthProvider = ({ children }) => {

    const initialState = {
        logged: false
    }

    const init = () => {
        const user = {
            user: JSON.parse( localStorage.getItem('user') ),
            token: JSON.parse( localStorage.getItem('token') ),
            name: JSON.parse( localStorage.getItem('name') ),
            id: JSON.parse( localStorage.getItem('id') ),
        };

        return {
            logged: !!user,
            user
        }
    }

    const [authState, dispatch] = useReducer(AuthReducer, initialState, init);

    const login = ( { user, token }) => {

        const action = {
            type: types.login,
            payload: {
                user: user.email,
                token: token,
                name: user.name,
                id: user.id
            }
        }

        localStorage.setItem('id', JSON.stringify(user.id));
        localStorage.setItem('name', JSON.stringify(user.name));
        localStorage.setItem('user', JSON.stringify(user.email));
        localStorage.setItem('token', JSON.stringify(token));

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        const action = {
            type: types.logout
        }

        dispatch(action);
    }
    
    return (
      <AuthContext.Provider value={{ ...authState, login, logout }}>
          { children }
      </AuthContext.Provider>
    )
}
