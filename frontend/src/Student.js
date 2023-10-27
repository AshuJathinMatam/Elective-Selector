import React from "react";


function Student(){
     const logout =()=>{
        localStorage.clear();
        window.location.reload();
    }
    return (
      <>
        <h1>Hello Student</h1>
        <button onClick={logout}>Logout</button>
      </>
    );
}

export  default Student;