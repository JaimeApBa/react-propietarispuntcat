import { useState } from "react";

export const useFetchUser = ( url, formState ) => {

    const [state, setState] = useState({
        data: null,
        hasError: null
    })
    const getFetch = async() => {
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
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

    return {
        data: state.data,
        hasError: state.hasError,
        getFetch
    };
}
