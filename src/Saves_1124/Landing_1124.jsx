import React from "react";
import {Avatar, Heading, VStack, Text, Box, HStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection_1125.jsx";

import theme1125 from "../Saves_1124/Themes_demo1126.jsx";
import narutoPic from "../avatars/pic_naruto_magazine.jpg";
import img3 from "myapp1124/screenshots/image3.png"


// Create global variables
const greeting = "Hello, I am Jesus Gomez. Nice to meet you.";
const bio1 = "I am a frontend developer in training,";
const bio2 = "My programming language(s): ";
const bio21 = "|___> JavaScript & React, Python, Bash.";
const bio3 = "IDE(s) (Integrated Development Environment) used: ";
const bio31 = "|___> Visual Studio Code, PyCharm, WebStorm, others";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
    <FullScreenSection theme={theme1125} isDarkBackground backgroundColor="tan" >



        <VStack spacing={4} borderRadius="card" bg="gray.100" p={6} >

            <HStack spacing={4}>
                <Avatar size="xl" name='Jesus Gomez' src={narutoPic} />
                <Heading textStyle="h1"> { greeting } </Heading>
            </HStack>

            <Text textStyle="h2">
                {bio1}  <br />
                {bio2}  <br />
                {bio21} <br />
                {bio3}  <br />
                {bio31}
            </Text>

        </VStack>

    </FullScreenSection>
);

export default LandingSection;
