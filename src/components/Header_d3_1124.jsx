import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faYoutube, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link as ChaLink1124 } from "@chakra-ui/react";


/*Create global variables here... */

const socials = [
    { icon: faEnvelope, url: "mailto: jesusg31.2013@gmail.com" }, { icon: faGithub, url: "https://github.com/py3user22" },
    { icon: faLinkedin, url: "https://www.linkedin.com/in/jesus-gomez-806332119" }, { icon: faStackOverflow, url: "https://meta.stackexchange.com/users/1840925/py3pro2026" },
    { icon: faYoutube, url: "https://www.youtube.com/@py3pro2023" },
];

// Define style object 10     px, py are shorthand props for padding (x-axis, y-axis)
const style10 = {justify: "space-between", px: 16, py: 4, align: "center"};


const HeaderThree = () => {
        {/*demo name is ' anchor '      changed to show just a placeholder value name, can be anything*/}
    const handleClick = (anchor) => {

        const id = `${anchor}-section`;

        {/*demo name is ' element '      changed to show just a placeholder value name, can be anything*/}
        const elementOne = document.getElementById(id);

        if (elementOne) { elementOne.scrollIntoView({ behavior: "smooth", block: "start", }); }
    };

    return (
        <Box  as="header" position="relative" top="0" left="0" right="0"
              transform="translateY(0)" transition="transform 0.3s ease-in-out"
              bg="tan" zIndex="1000" mb="5px"
        >
            <Box>
                <HStack { ... style10}>
                    <nav aria-label="social links">

                        <HStack>
                            {
                                socials.map((social) => (
                                    <ChaLink1124 key={social.id} href={social.url} isExternal>
                                        <FontAwesomeIcon icon={social.icon} size="2x" color="purple" />
                                    </ChaLink1124>
                                ))
                            }
                        </HStack>

                    </nav>

                    <nav aria-label="main navigation">

                        <HStack spacing={8}>
                            <ChaLink1124 href="projects-section" onClick={handleClick("projects")}> Projects  </ChaLink1124>
                            <ChaLink1124 href="contactme-section" onClick={handleClick("contactme")}> Contact me </ChaLink1124>
                        </HStack>

                    </nav>

                </HStack>

            </Box>
        </Box>
    )
}

export default HeaderThree;