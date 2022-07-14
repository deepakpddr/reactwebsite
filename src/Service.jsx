import React from "react";
import web from "../src/images/2.jpg";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="tab-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row gy-4">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            {
                                Sdata.map((val, ind)=>{
                                    return <Card key={ind} 
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;