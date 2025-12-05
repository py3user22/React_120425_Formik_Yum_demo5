// App.jsx or IconsTest.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    faMedium,
    faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";


/* demo1124 check the icons if showing correctly  */
const IconsTest = () => {
    return (
        <div style={{ fontSize: "2rem", display: "flex", gap: "1rem" }}>
            <FontAwesomeIcon icon={faGithub} title="GitHub" />
            <FontAwesomeIcon icon={faLinkedin} title="LinkedIn" />
            <FontAwesomeIcon icon={faMedium} title="Medium" />
            <FontAwesomeIcon icon={faStackOverflow} title="Stack Overflow" />
        </div>
    );
};

export default IconsTest;