import React, { useEffect } from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';

export const Delete = () => {
    const account_id = useParams();

    useEffect(()=> {
        deleteAccount();
    }, []);

    const deleteAccount = async() => {
        await axios.delete(`http://localhost:3000/facebbok/${account_id.id}`).then(response => {
            alert(`Account Deleted Successfully`);
        }).catch(error => {
            alert(`ERROR OCCURED: ${error}`);
        });
    }
    return(
        <>
        
        </>
    )
}