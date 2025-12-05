import { VStack } from "@chakra-ui/react";


{/* use of children prop, spread operator */}

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
    return (
        <VStack backgroundColor={boxProps.backgroundColor}
                color={isDarkBackground ? 'white' : 'black'}>

            <VStack maxW="1280px" minH="100vh" {...boxProps}>
                {children}
            </VStack>

        </VStack>
    );
}

export default FullScreenSection;