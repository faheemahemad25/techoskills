import React from 'react';
import { Link } from "react-router";

function ContactUs() {
    return (
        <>
            <div style={{padding:"20px"}}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBlock:"10px" }}>
                    <h3>Website: </h3>
                    <Link to='https://www.techoskills.com/' target="_blank">techoskills.com/</Link>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBlock:"10px" }}>
                    <h3>Youtube: </h3>
                    <Link to='https://www.youtube.com/@TechoSkills' target="_blank">youtube.com/@TechoSkills</Link>
                </div>
                 <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBlock:"10px" }}>
                    <h3>LinkedIn: </h3>
                    <Link to='https://www.linkedin.com/company/techoskills/' target="_blank">linkedin.com/company/techoskills/</Link>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBlock:"10px" }}>
                    <h3>Twitter(X): </h3>
                    <Link to='https://x.com/TechoSkills' target="_blank">x.com/TechoSkills</Link>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBlock:"10px" }}>
                    <h3>Instagram: </h3>
                    <Link to='https://www.instagram.com/techo_skills/' target="_blank">instagram.com/techo_skills/</Link>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBlock:"10px" }}>
                    <h3>Facebook: </h3>
                    <Link to='https://www.facebook.com/techoskillsofficial' target="_blank">facebook.com/techoskillsofficial</Link>
                </div>
            </div>

        </>
    );
}

export default ContactUs;