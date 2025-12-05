import {Box, Heading, Image, Text, SimpleGrid} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";


const Card = ({ title, description, imageSrc }) => {

    return (
        <Box bg="green.600" p={2} borderRadius="md" border="solid 2px black">


            <Image src={ imageSrc } alt={ title } />
            <Heading backgroundColor="white" size="md" pl={2}> { title } </Heading>
            <Text backgroundColor="white" pl={2} >{ description } </Text>
            <Text backgroundColor="white" color="blue.400" pl={2} >See more <FontAwesomeIcon icon={ faArrowRight } /></Text>

        </Box>
    );
};

// ==================================================================

const CardGrid = () => {

    const descOne = "Handy tool belt to create amazing AR components in a React app.";
    const descTwo = "A scrollable bottom sheet w/ visual support, native animations at 60 FPS";
    const descThree = "One-Stop shop for photographers to share & monetize their photos";
    const descFour = "Mobile app for leisure seekers to discover unique events & activities";

    return (
        <SimpleGrid columns={2} spacing={3}>
            <Card title="React Space" description={ descOne } imageSrc={ photo1 } />
            <Card title="React infinite scroll" description={ descTwo } imageSrc={ photo2 } />
            <Card title="Photo Gallery" description={ descThree } imageSrc={ photo3 } />
            <Card title="Event Planner" description={ descFour } imageSrc={ photo4 } />
        </SimpleGrid>
    );
};

export { CardGrid };
