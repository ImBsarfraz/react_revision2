import React from "react";
import { Data } from "./MapData";

export const MapComponent = () => {
    return(
        <>
        <div className="container-fluid p-5">
            <div className="row">
                {
                    Data.map((bagwan)=>(
                        <div className="col-md-3">
                            <div className="card text-center">
                            <div className="card-header">
                            <img src={bagwan.avtar} class="card-img-top" alt={bagwan.name} height={"250px"}/>
                            </div>
                            <div className="card-body">
                                <h3>{bagwan.name}</h3>
                                <h6>{bagwan.education}</h6>
                                <p>{bagwan.address}</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-dark">Save</button>
                            </div>
                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}