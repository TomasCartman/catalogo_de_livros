import { useState } from "react";

export default function useDropdownsHide(numberOfDropdowns) {
    const [ dropdowns, setDropdowns ] = useState(Array(numberOfDropdowns).fill(true))

    const getDropdownIsHide = position => dropdowns[position]

    const toggleDropdownVisibility = position => {
        const newDropdownArray = [...dropdowns]
        newDropdownArray[position] = !dropdowns[position]
        setDropdowns([...newDropdownArray])
    }

    return {
        getDropdownIsHide,
        toggleDropdownVisibility
    }
}