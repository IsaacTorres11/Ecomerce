import {NavLink} from 'react-router-dom'
export const BarraNavegacion = () => {
  return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid p-3 ">
            <NavLink className="navbar-brand " to='/'>E-comerce</NavLink>
            <NavLink className="navbar-brand " to='/nosotros'>Nosotros</NavLink>
            <form className="d-flex" role="search">
            <input className="form-control me-2  " type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success " type="submit">Search</button>
            </form>
        </div>
    </nav>
  )
}

export default BarraNavegacion