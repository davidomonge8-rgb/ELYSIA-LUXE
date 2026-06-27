import { Link } from 'react-router-dom'
import '../../componentsCss/Home/homeheader.css'

function Header(){
    return(
        <div className="allheader">
            <div className='header'>
                <div className="headerlinks">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Room & Suites</Link></li>
                        <li><Link to="/amenities">Amenities</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
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