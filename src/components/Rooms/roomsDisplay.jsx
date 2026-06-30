import '../../componentsCss/Rooms/roomDisplay.css'

import obsidian from '../Rooms/images/obsidian.jpg'
import noir from '../Rooms/images/Noir.jpg'
import garden from '../Rooms/images/Garden loft.jpg'

import coastal from '../Rooms/images/Coastal.jpg'
import Zen from '../Rooms/images/Zen.jpg'
import Urban from '../Rooms/images/Urban.jpg'


function Display(){
    return(
        <div>
            <div className="roomdisplay">
                <div className="card">
                    <img src={obsidian} alt="" />
                    <h2>Obsidian Stone Suite</h2>
                    <p>A dramatic retreat carved from nature. Raw stone walls meet plush coral and slate textiles, with mood lighting that shifts from dawn to dusk.</p>
                    <button>Book Now</button>
                </div>

                <div className="card">
                    <img src={noir} alt="" />
                    <h2>Noir Atelier Suite</h2>
                    <p>Cinematic darkness refined. A full media wall with hidden ambient lighting, curated bookshelf display, and deep leather seating for the sophisticated urban traveler.</p>
                    <button>Book Now</button>
                </div>

                <div className="card">
                    <img src={garden} alt="" />
                    <h2>Garden Loft Deluxe</h2>
                    <p>Morning light pours through floor-to-ceiling glass into a tranquil haven of warm wood and soft neutrals. Includes a bespoke dressing gallery.</p>
                    <button>Book Now</button>
                </div>
            </div>

            <div className="roomdisplay">
                <div className="card">
                    <img src={coastal} alt="" />
                    <h2>Coastal Breeze Suite</h2>
                    <p>Wake to the sound of waves in an airy, sun-washed escape. A private terrace overlooks turquoise waters, with crisp linens and relaxed coastal elegance.</p>
                    <button>Book Now</button>
                </div>

                <div className="card">
                    <img src={Zen} alt="" />
                    <h2>Zen Slat Sanctuary</h2>
                    <p>Silence is the luxury here. Vertical oak slats, floating pendant fixtures, and a perfectly neutral palette create a meditative space designed for deep rest.</p>
                    <button>Book Now</button>
                </div>

                <div className="card">
                    <img src={Urban} alt="" />
                    <h2>Urban Botanist Room</h2>
                    <p>A plant-filled corner of calm above the city. Features a dedicated walnut work desk, moss-toned textiles, and panoramic urban views through black-frame windows.</p>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default Display