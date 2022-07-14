import React from "react";
import { Link } from "react-router-dom";
import web from "../src/images/2.jpg";
import Common from "./Common";

const Home = () => {
    return (
        <>
           <Common name="Logistics made easy
through digital solutions " imgsrc={web} visit="/service" btnname="Get Started"/>
        </>
    )
}

export default Home;