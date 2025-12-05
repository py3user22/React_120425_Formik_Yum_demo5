import './App.css';

import HeaderThree from "./components/Header_d3_1124";

import { ChakraProvider } from "@chakra-ui/react";



export default function App() {
    return (

        <ChakraProvider theme={theme1125}>

            {/*New header try working demo1125 */}
            <HeaderThree />


        </ChakraProvider>
    );
}
