import React from "react";
import { Link } from "react-router-dom";
import web from "../src/images/2.jpg";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center my-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto my-5">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-l-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{props.name} <strong className="brand-name">DKP|Logistics</strong></h1>
                                <h2 className="my-3">
                                Register and you will soon be able to manage your logistics online.
                                </h2>
                                <div className="mt-3">
                                    <Link to={props.visit} className="btn-get-started">{props.btnname}</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img my-5">
                                <img src={props.imgsrc} className="img-fluid animated" alt="home_img"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;