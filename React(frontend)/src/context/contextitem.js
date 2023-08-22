import { createContext } from "react";

const ContextItem=createContext({
    token:'',
    Loggedin:false,
    loggedinToggler:()=>{},
    tokenToggler:()=>{}
})
export default ContextItem