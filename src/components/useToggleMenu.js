import { useEffect, useState, useRef } from "react"


export const useToggleMenu = ( initialValues ) => {
    const [values, setContent] = useState( initialValues );

    useEffect( () => {
        console.log(initialValues);
    },[values, initialValues])

    return [
        values,
        e => {
            setContent ( prevState => ({
                    ...prevState,
                    ...values,
                    [e.target.name]: !prevState[e.target.value]
            }))
        }
    ];
}
