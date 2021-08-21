import { NavLink } from "react-router-dom"
import "./Header.css"

export const Header = ({...props}) => {
    return (
        <header>
            <NavLink to="/">Mina</NavLink>
            <NavLink to="/">Mejoras</NavLink>
            <NavLink to="/">Tienda</NavLink>
            <NavLink to="/">Configuración</NavLink>
            <NavLink to="/">Acerca de</NavLink>
        </header>
    )
}