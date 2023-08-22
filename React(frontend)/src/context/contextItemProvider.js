import { useState } from "react"
import ContextItem from "./contextitem"

const ContextItemProvider=(props)=>{

    const[token,setToken]=useState('')
    const[loggedin,setLoggedin]=useState(false)
    const tokenToggler=(s)=>{
        setToken(s);
    }
    const loggedinToggler=()=>{
        setLoggedin(prev=>!prev)
    }
    const ctxProvider={
        token:token,
        Loggedin:loggedin,
        loggedinToggler:loggedinToggler,
        tokenToggler:tokenToggler
    }
    return(<ContextItem.Provider value={ctxProvider}>{props.children}</ContextItem.Provider>)


}
export default ContextItemProvider