import { useEffect } from "react";
import { useState } from "react";

export const useFetchComunityList = ( url ) => {

    const [state, setState] = useState({
        data: null,
        hasError: null
    })
    const id = JSON.parse(localStorage.getItem('id'));
    const token = JSON.parse(localStorage.getItem('token'));

    const getFetch = async() => {
        const resp = await fetch(`${url}/${id}`, {
            method: 'GET',
          
            headers: {
                'Authorization': `${token}`,
            },
        });

        const data = await resp.json();
        
        if(resp.ok === false) {
            setState({
                data: null,
                hasError: data.message
            });
        }
        else {
            setState({
                data: data,
                hasError: null
            });
        }

    };
    useEffect(() => {
       getFetch();
    }, [id])
    

    return {
        data: state.data,
        hasError: state.hasError,
    };
}
