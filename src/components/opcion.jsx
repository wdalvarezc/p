import { Link } from "react-router-dom";

function Opcion(props) {
    return (
        <>
            <li>
                <Link className='opcion' to={`/p/${props.op}`}> {props.op}</Link>
            </li>
        </>
    );
}

export default Opcion;