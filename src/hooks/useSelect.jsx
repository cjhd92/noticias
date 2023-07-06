import React, { useState } from 'react'

const useSelect = (stateInicial, opciones) => {

    const [state, guardarState] = useState(stateInicial);

    const actualizarState = e => {
        guardarState(e.target.value);
    }

    //elemento visual
    const SelectNoticias = () =>(

        <select className='browser-default'
                value={state}
                onChange={actualizarState}>

            {opciones.map(option => (
                <option key={option.value} 
                        value={option.value} 
                                            > {option.label} </option>
            ))}
            <option value=''>Seleccione</option>
        </select>
    );
    return [state, SelectNoticias];


}

export default useSelect