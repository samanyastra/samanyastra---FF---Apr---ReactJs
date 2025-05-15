
const NavButton = (props) => {

    const navBtnHandler = (event) => {
        // console.log(" I am clicked", event.target.value)
        props.clickHandler(event.target.value)
    }

    return <button value={props.text} onClick={navBtnHandler}>
        {props.text}
    </button>
}

export default NavButton;