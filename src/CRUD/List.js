import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

export const List = () => {
    const [facebookDtata, setFacebookData] = useState([]);
    
    useEffect(()=>{
        allAccounts();
    }, []);

    const allAccounts = async() => {
        const result = await axios.get(`http://localhost:3000/facebbok`);
        setFacebookData(result.data);
    }
    
    return(
        <>
        <h1>All Accounts List</h1>

        <div className="p-5">
            <table className="tbale table-bordered table-sm" width={"100%"} border={"1"}>
                <tr>
                    <th>EDIT</th>
                    <th>DELETE</th>
                    <th>SN</th>
                    <th>USER NAME</th>
                    <th>USER EMAIL</th>
                    <th>USER MOBILE</th>
                    <th>USER PASSWORD</th>
                </tr>
                {
                    facebookDtata.map((account)=>(
                        <tr key={account.id}>
                            <td><Link to={`/edit/${account.id}`}><button className="btn btn-success">EDIT</button></Link></td>
                            <td><Link to={`/delete/${account.id}`}><button className="btn btn-danger">DELETE</button></Link></td>
                            <td>{account.id}</td>
                            <td>{account.name}</td>
                            <td>{account.email}</td>
                            <td>{account.mobile}</td>
                            <td>{account.password}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
        </>
    )
}