import React from "react";
import { Link } from "react-router-dom";
import web from "../src/images/2.jpg";

const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto my-2">
                <div className="card">
                    <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <Link to="#" className="btn btn-primary">Book Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;