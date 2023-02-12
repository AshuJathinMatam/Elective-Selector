import React, {useEffect, useState} from "react";
import './App.css';
import { SignInWithGoogle } from './Firebase';
import {auth, provider} from "./Firebase";
import { signInWithPopup } from "firebase/auth";
import Home from './Home';
import Student from "./Student";


function App() {
    const [value, setValue] = useState("");

  const handleClick =() =>{
    signInWithPopup(auth, provider).then((data)=>{
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
    })
  }

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div className="App">
      {value && value === "matamashu03@gmail.com" ? (
        <Home />
      ) : value && 
        value.includes("iiitl.ac.in") ? (
        <Student />
      ) : (
        <>

          <h1>Please use institute email id only</h1>
          <button onClick={handleClick}>Sign In With Google</button>
        </>
      )}
    </div>
  );
}

export default App;
