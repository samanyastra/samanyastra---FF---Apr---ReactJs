

const NavBtn = ({btnText, btnValue, onClickFunction, currPage}) => {
    return <li>
    <button 
        value={btnValue}
        className="nav-btns" 
        onClick={onClickFunction}
        style={{ backgroundColor: currPage === btnValue ? "#012030" : "" }}

    >
        {btnText}
    </button>
    </li>
}


export default NavBtn