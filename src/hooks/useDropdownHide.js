import { useState } from "react"

export default function useDropdownHide() {
    const [isDropdownHide, setDropdownHide] = useState(true)

    function toggleDropdownVisibility() {
        setDropdownHide(!isDropdownHide)
    }

    return {
        isDropdownHide,
        toggleDropdownVisibility
    }
}