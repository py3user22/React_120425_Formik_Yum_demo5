import {extendTheme} from "@chakra-ui/react";

const theme1125  = extendTheme({
    textStyles: {
        h1: {
            fontSize: ["4xl", "5xl"], // responsive sizes
            fontWeight: "bold",
            lineHeight: "short",
            textAlign: "center",      // ✅ use textAlign instead of justifyContent/alignItems
            color: "bisque",
            bg: "#2A4365",            // ✅ shorthand for backgroundColor
            px: 4,                    // padding for readability
            py: 2,
            borderRadius: "md",
            m: "5px",
        },
        h2: {
            fontSize: ["2xl", "3xl"],
            fontWeight: "semibold",
            lineHeight: "short",
            m: "5px",
            color: "blue",
            bg: "white",
        },
        h3: {
            color: "green",
            m: "5px",
        },
        radii: {
            card: "12px",
            section: "24px",
        },
    },
});

export default theme1125;