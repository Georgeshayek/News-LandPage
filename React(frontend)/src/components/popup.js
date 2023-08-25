import React, { Fragment, useRef,useContext,useState } from "react";
import ReactDOM from "react-dom";
import { AiOutlineCloseCircle } from 'react-icons/ai'; // Import the close icon
import { FaEnvelope, FaLock } from 'react-icons/fa';
import classes from "./popup.module.css";
import ContextItem from "../context/contextitem";
import axios from 'axios';
const Popup=(props)=>{
 const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.dismiss}></div>;
  };
  const Model = (props) => {
    const ctx = useContext(ContextItem);
    
    const [errorMessage, setErrorMessage] = useState('');
    const inputRef = useRef('');
    const inputRef1 = useRef('');
    const handleLogin = async () => {
        const requestBody = {
          email: inputRef.current.value,
          password: inputRef1.current.value,
        };
    
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login', requestBody);
            ctx.tokenToggler(response.data["access_token"]);
            console.log('Login successful', ctx.token);
            ctx.loggedinToggler();
            setErrorMessage('')
            props.dismiss(); 
        } catch (error) {
          setErrorMessage('Invalid credentials'); // Set error message
          console.error(error);
        }
      };
    
    return (
        <div className={`${classes.Card} ${classes.modal}`}>
        <AiOutlineCloseCircle className={classes.closeIcon} onClick={props.dismiss} />
            <h1 style={{textAlign:"center"}}>Login</h1>
            {errorMessage && <p style={{color:"red",textAlign:"center"}}>{errorMessage}</p>}  
        <div className={classes.content}>
          <label><FaEnvelope className={classes.icon} /> Email:</label>
          <input ref={inputRef} type="email" placeholder="Email" />
          <label><FaLock className={classes.icon} /> Password:</label>
          <input ref={inputRef1} type="password" placeholder="Password"/>
        </div>
        <div className={classes.buttonContainer}>
        <button className={classes.signInButton} onClick={handleLogin}>SignIn</button>
      </div>
      </div>
    );
  };

  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop dismiss={props.dismiss} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <Model  dismiss={props.dismiss}/>,
        document.getElementById("modal-root")
      )}
    </Fragment>
  );
};
export default Popup;