import { useState } from 'react';
import NavButton from '../Button/NavButtons';
import './navStyle.css'

const Navbar = (props) => {

    const [color, setColor] = useState("cyan")

    const navHandler = (btnValue) => {
        console.log("I am clicked from navbar component")
        console.log("The button clicked is......", btnValue)
        // props.changePage(btnValue)
        setColor(btnValue)
    }


    return <div 
            className="navbar-container" 
            style={ { background: color } }
            >
        <h1>Samanyastra</h1>
        <div>
            <NavButton text="blue"  clickHandler={navHandler} /> 
            {/* clickHandler("yellow")  => navHandler("yellow") */}
            <NavButton text="red" clickHandler={navHandler} />
        </div>
        {/* <div>{color}</div> */}
    </div>
}

export default Navbar;