import { useEffect, useState } from "react";

function useColor(initColor) {
    const [fillColor, setFillColor] = useState(initColor);
    const [prevColor, setPrevColor] = useState("");
    const [hovered, setHovered] = useState(false);

    const hoverColor = "#286DC0";
    const scrollColors = ["#E8B5BC", "#EDCEC5", "#EDDECA", "#C9BED1"];
    
    function handleSetFillColor() {
        // Hovered state overrides color change
        // if (!hovered) {
        //     // Enesure we're randomly selecting a DIFFERENT color
        //     let colorOptions = scrollColors.filter((color) => color != fillColor);
        //     console.log(colorOptions, scrollColors, fillColor);
        //     setFillColor(colorOptions[Math.floor(Math.random() * colorOptions.length)]);
        // }
        let colorOptions = scrollColors.filter((color) => color != fillColor);
        console.log(colorOptions, scrollColors, fillColor);
        setFillColor(colorOptions[Math.floor(Math.random() * colorOptions.length)]);
    }

    function handleHover(isHovered) {
        if (isHovered) {
            setPrevColor(fillColor);
            setFillColor(hoverColor);
        } else {
            setFillColor(prevColor);
        }

        setHovered(isHovered);
    }

    return { fillColor, handleSetFillColor, handleHover };
}

export default useColor;