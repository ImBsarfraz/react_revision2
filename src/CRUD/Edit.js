import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import axios from 'axios';

export const Edit = () => {
    const [facebookData, setFacebookData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    });
    useEffect(()=> {
        allAccounts();
    }, []);

    const account_id = useParams()
    
    const allAccounts = async()=>{
        const result = await axios.get(`http://localhost:3000/facebbok/${account_id.id}`);
        setFacebookData(result.data);
    };

    const handleChange = (event) => {
        setFacebookData({
            ...facebookData,
            [event.target.name]: event.target.value,
        });
    };

    const updateAccount = async() => {
        await axios.put(`http://localhost:3000/facebbok/${account_id.id}`, facebookData).then(response => {
            alert('Account Updated!');
        }).catch(error=>{
            alert('Something Went Wrong!');
        })
    };

    

    console.log(facebookData);
    return(
        <>
        <h1>Edit Facebook Account</h1>
        <div className='p-5'>
        <from>
            User Name: <input onChange={handleChange}  type='text' defaultValue={facebookData.name} className='form-control' name='name' placeholder='Enter Your Name'/><br/><br/>
            User Email: <input onChange={handleChange}  type='email' defaultValue={facebookData.email} className='form-control' name='email' placeholder='Enter Your Email'/><br/><br/>
            User Mobile: <input onChange={handleChange}  type='number' defaultValue={facebookData.mobile} className='form-control' name='mobile' placeholder='Enter Your Mobile'/><br/><br/>
            User Password: <input onChange={handleChange}  type='password' defaultValue={facebookData.password} className='form-control' name='password' placeholder='Enter Your Password'/><br/><br/>
            <button onClick={() => updateAccount()} className='btn btn-success'> CREATE ACCOUNT </button>
        </from>
        </div>
        </>
    )
}