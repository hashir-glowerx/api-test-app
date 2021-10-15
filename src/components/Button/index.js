import React from 'react'
import {Button} from "@mui/material";
import './index.css'
function BtnComponent(props) {
    return <Button className="button" {...props} />
}
export default BtnComponent
