import {Box, Heading, Image, Text, SimpleGrid, Flex} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";


const Card = ({ title, description, imageSrc }) => {

    return (
        <Box
            borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="md"
            textAlign="left" backgroundColor="green.700"
        >
            <h2 color="white">Featured Projects </h2>
            <Image src={imageSrc} alt={title} borderRadius="15px" />
            <Flex backgroundColor="white" pl={1} textAlign="left" >

                <Heading size="md" mt={2}>{title}</Heading>
                <Text mt={2} color="gray.600" >
                    { description }
                </Text>
                <Text mt={3} >
                    See more <FontAwesomeIcon icon={ faArrowRight } />
                </Text>

            </Flex>


        </Box>
    );
};


const CardGrid = () => {

    const descOne = "Handy tool belt to create amazing AR components in a React app.";
    const descTwo = "A scrollable bottom sheet w/ visual support, native animations at 60 FPS";
    const descThree = "One-Stop shop for photographers to share & monetize their photos";
    const descFour = "Mobile app for leisure seekers to discover unique events & activities";

    return (
        <SimpleGrid columns={ {base: 1, md: 2, lg: 3 } } spacing={3}>
            <Card title="React Space" description={ descOne } imageSrc={ photo1 } />
            <Card title="React infinite scroll" description={ descTwo } imageSrc={ photo2 } />
            <Card title="Photo Gallery" description={ descThree } imageSrc={ photo3 } />
            <Card title="Event Planner" description={ descFour } imageSrc={ photo4 } />
        </SimpleGrid>
    );
};

export { CardGrid };
