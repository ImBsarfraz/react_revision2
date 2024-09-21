import React, { useState } from 'react';
import axios from 'axios';

export const Create = () => {
    const [facebookData, setFacebookData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    });

    const handleChange = (event) => {
        setFacebookData({
            ...facebookData,
            [event.target.name]: event.target.value,
        });
    };

    const cretateAccount = async(event) => {
        await axios.post('http://localhost:3000/facebbok', facebookData).then(response=> {
            alert('Account Created Successfully');
        }).catch(error => {
            alert(`An Error Occured: ${error}`);
        });
    }; 

    console.log(facebookData);
    return(
        <>
        <h1>Create Facebook Account</h1>

        <div className='p-5'>
        <from>
            User Name: <input onChange={handleChange} type='text' value={facebookData.name} className='form-control' name='name' placeholder='Enter Your Name'/><br/><br/>
            User Email: <input onChange={handleChange} type='email' value={facebookData.email} className='form-control' name='email' placeholder='Enter Your Email'/><br/><br/>
            User Mobile: <input onChange={handleChange} type='number' value={facebookData.mobile} className='form-control' name='mobile' placeholder='Enter Your Mobile'/><br/><br/>
            User Password: <input onChange={handleChange} type='password' value={facebookData.password} className='form-control' name='password' placeholder='Enter Your Password'/><br/><br/>
            <button onClick={() => cretateAccount()} className='btn btn-success'> CREATE ACCOUNT </button>
        </from>
        </div>
        </>
    )
}