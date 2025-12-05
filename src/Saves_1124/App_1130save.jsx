import './App.css';
import { ChakraProvider } from "@chakra-ui/react";

import LandingSection from "./components/LandingSection_1128.jsx";
import HeaderThree from './components/Header_d3_1124';
import {CardGrid} from "./components/Card_1130.jsx";


export default function App() {
    return (

        <ChakraProvider >

            <HeaderThree />

            {/* Landing page, --demo1125 */}
            <LandingSection />

            <CardGrid />

            {/* Contact me --demo1130*/}



        </ChakraProvider>
    );
}
