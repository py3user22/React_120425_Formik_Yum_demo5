import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faMedium, faStackOverflow } from "@fortawesome/free-brands-svg-icons";



const socials = [
    { icon: faEnvelope, url: "mailto:jesusg31.2013@gmail.com" },
    { icon: faGithub, url: "https://github.com/py3user22" },
    { icon: faLinkedin, url: "https://www.linkedin.com/in/jesus-gomez-806332119" },
    { icon: faMedium, url: "https://medium.com" },
    { icon: faStackOverflow, url: "https://meta.stackexchange.com/users/1840925/py3pro2026" },
];

const SocialLinks = () => {
    return (
        <div style={{ display: "flex", gap: "1rem", fontSize: "2rem" }}>
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={social.icon} />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;


