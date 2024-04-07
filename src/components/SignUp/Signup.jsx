import React, { useState } from 'react';
import "./signUp.css";
export default function Signup (){

    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault(); 
        console.log('First Name:',firstName);
        if(password!== confirmPassword){
            alert('Password not matching');
            return;
        }
    };
    return (
        <div className='signup-container'>
        <h2>Create User</h2>
        <form onSubmit={handleSubmit} className='signup-form'>
            <div>
                <label>
                    First Name: 
                </label>
                <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>setfirstName(e.target.value)} required/>
            </div>
            <div>
                <label>
                    Last Name:
                </label>
                <input type='text' placeholder='Last Name' value={lastName} onChange={(e)=>setlastName(e.target.value)} required/>
            </div>
            <div>
                <label>
                    Email:
                </label>
                <input type='email' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} required/>
            </div>
            <div>
                <label>
                    Password:
                </label>
                <input type='password' placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} required/>
            </div>
            <div>
                <label>
                    Confirm Password:
                </label>
                <input type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)} required/>
            </div>
            <button type='submit'>Submit</button>
        </form>
        </div>
    );
}

