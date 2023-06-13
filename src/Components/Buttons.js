import { Link } from "react-router-dom"

function Buttons(props) {
    return (
        <button className="px-7 py-3 rounded-full min-w-[175px] transition ease-in-out delay-150 bg-[#828594] hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-250  ">
            <Link to={props.link}>{props.text}</Link>
        </button>
    );
}
export default Buttons 