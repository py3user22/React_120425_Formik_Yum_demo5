import './App.css';
import { ChakraProvider } from "@chakra-ui/react";

import HeaderThree from "./components/Header_d3_1124";
import LandingSection from "./components/LandingSection_1128.jsx";
import {CardGrid} from "./components/Card_1130.jsx";


export default function App() {
    return (

        <ChakraProvider >

            {/*New header try working demo1125 */}
            <HeaderThree />

            <LandingSection />

            <CardGrid />



        </ChakraProvider>
    );
}