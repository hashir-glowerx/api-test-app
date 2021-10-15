import React from 'react'
import { TextField} from "@mui/material";
import './index.css'
const InputField=(props)=> {
    return (
      <TextField className="input_field" {...props}/>
    )
}

export default InputField
