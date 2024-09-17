import React from "react";

export const Child = (props) => {
    return(
        <>
        <h1>Child Component!</h1>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-header">
                            <img src={props.image1} class="card-img-top" alt={props.image1} height={"250px"}/>
                        </div>
                        <div className="card-body">
                            <h3>{props.name1}</h3>
                            <h6>{props.education1}</h6>
                            <p>{props.address1}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-warning">Save</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-header">
                            <img src={props.image2} class="card-img-top" alt={props.image2} height={"250px"}/>
                        </div>
                        <div className="card-body">
                            <h3>{props.name2}</h3>
                            <h6>{props.education2}</h6>
                            <p>{props.address2}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-warning">Save</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-header">
                            <img src={props.image3} class="card-img-top" alt={props.image3} height={"250px"}/>
                        </div>
                        <div className="card-body">
                            <h3>{props.name3}</h3>
                            <h6>{props.education3}</h6>
                            <p>{props.address3}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-warning">Save</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-header">
                            <img src={props.image4} class="card-img-top" alt={props.image4} height={"250px"}/>
                        </div>
                        <div className="card-body">
                            <h3>{props.name4}</h3>
                            <h6>{props.education4}</h6>
                            <p>{props.address4}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-warning">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}