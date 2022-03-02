import Opcion from "./opcion";
import { useState } from 'react';
import '../styles/menu.scss'
function Menu() {
    const [opcion, setOpcion] = useState([
        { id: 1, op: 'Avion' },
        { id: 2, op: 'Auto' },
        { id: 3, op: 'Barco' },
    ])
    return (
        <>
            <nav>
                <ul>
                    {
                        opcion.map((e) => {
                            return (
                                <Opcion key={e.id} op={e.op} />
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default Menu;