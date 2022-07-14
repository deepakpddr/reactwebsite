import React from "react";
import { Link } from "react-router-dom";
import web from "../src/images/1.jpg";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common name="About Us" imgsrc={web} visit="/contact" btnname="Contact Now"/>
        </>
    )
}

export default About;