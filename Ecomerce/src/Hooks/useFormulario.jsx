import { useState } from "react";


function useFormulario (callback, defaults){
    const [input, setInput] = useState(defaults)

    const handleSubmit =(e)=>{
        e.preventDefault()
        callback(input)
    }

    const handleChange =(e)=>{
        const {name, value} = e.target

        setInput({
            ...input,
            [name] : value
        })
    }

    return{
        input,
        handleSubmit,
        handleChange
    }
}

export default useFormulario