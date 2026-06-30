import { Link, NavLink } from 'react-router-dom'
import '../../componentsCss/Home/homeheader.css'

function Header(){
    return(
        <div className="allheader">
            <div className='header'>
                <div className="headerlinks">
                    <ul>
                        <li><NavLink to="/" end>Home</NavLink></li>
                        <li><NavLink to="/rooms">Room & Suites</NavLink></li>
                        <li><NavLink to="/amenities">Amenities</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                    </ul>
                </div>

                <div className="headertitle">
                    <h1>ELYSIA LUXE</h1>
                </div>

                <div className="headerbookbutton">
                    <Link to="/book">Book Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Header