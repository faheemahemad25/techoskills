import React from 'react';
import { Link } from "react-router";
import { FaGlobe } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

function ContactUs() {
    return (
        <>
            <div style={{ padding: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBlock: "10px" }}>
                    {/* <h3>Website: </h3> */}
                    <FaGlobe />
                    <Link to='https://www.techoskills.com/' target="_blank">techoskills.com/</Link>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBlock: "10px" }}>
                    {/* <h3>LinkedIn: </h3> */}
                    <FaLinkedin />
                    <Link to='https://www.linkedin.com/company/techoskills/' target="_blank">linkedin.com/company/techoskills/</Link>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBlock: "10px" }}>
                    {/* <h3>Twitter(X): </h3> */}
                    <FaSquareXTwitter />
                    <Link to='https://x.com/TechoSkills' target="_blank">x.com/TechoSkills</Link>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBlock: "10px" }}>
                    {/* <h3>Youtube: </h3> */}
                    <IoLogoYoutube />
                    <Link to='https://www.youtube.com/@TechoSkills' target="_blank">youtube.com/@TechoSkills</Link>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBlock: "10px" }}>
                    {/* <h3>Instagram: </h3> */}
                    <FaInstagramSquare />
                    <Link to='https://www.instagram.com/techoskillsofficial/' target="_blank">instagram.com/techoskillsofficial/</Link>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBlock: "10px" }}>
                    {/* <h3>Facebook: </h3> */}
                    <FaFacebook />
                    <Link to='https://www.facebook.com/techoskillsofficial' target="_blank">facebook.com/techoskillsofficial</Link>
                </div>
            </div>

        </>
    );
}

export default ContactUs;
