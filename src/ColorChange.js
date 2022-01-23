import {useState} from "react"
import "./colorChange.css"

const ColorChange = () => {
    //array of colors
    const colors = ["red", "orange", "black", "pink", "purple", "blue", "green", "yellow", "navyblue"]

    //Hook to modify color of the <circle></circle>
    const [coloring, setColor] = useState("teal")

    //onClick function to change the color to a random color
    const changeColor = () => {
        
        setColor(colors[Math.floor(Math.random() * colors.length)])
    }

    return (
        <div id="colorChange">
            <div id="colored" style={{backgroundColor: coloring}}></div>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default ColorChange;