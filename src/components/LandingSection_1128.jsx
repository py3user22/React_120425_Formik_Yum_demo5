import React from "react";
import FullScreenSection from "./FullScreenSection_1125.jsx";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";

import narutoPic from "../avatars/pic_naruto_magazine.jpg";
import iconPic from "../images/py3pro icon save2.png";


const greeting = "Hello, I am Jesus Gomez. Nice to meet you.";
const greet2 = "My online alias is youtube.com/@py3pro2023 as in the icon. Hit like!";

const LandingSection = () => (

    <FullScreenSection isDarkBackground backgroundColor="bisque" >

        <VStack spacing={4} mt="5px">

            <Avatar size="xl" name='Naruto' src={narutoPic} />
            <Avatar size="xl" name='py3proIcon' src={iconPic} />
            <Heading as="h1" size="2xl" color="blue" fontStyle="italic"
                     border="2px dashed black" borderRadius="0 15px 0 15px" p={2}
            > </Heading>
            <Text color="blue.400" >  { greeting } <br /> { greet2 }  </Text>
        </VStack>

    </FullScreenSection>

);

export default LandingSection;
