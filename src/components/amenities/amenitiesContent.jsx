import '../../componentsCss/amenities/amenitiesContent.css'

import pool from '../../components/amenities/images/infinitypool.jpg'
import gastronomy from '../../components/amenities/images/gastronomy.jpg'
import wellness from '../../components/amenities/images/spa.jpg'

function AmenitiesContent(){
    return(
        <>
        <div className="amenitiesContent">
            <div className="amenitiesContentImage">
                <img src={pool} alt="pool image" />
            </div>

            <div className="amenitiesContentDescription">
                <p>Water & Horizon</p>
                <h1>Celestial Infinity Pool</h1>
                <br />
                <h3>Suspend time as you drift in our temperature-controlled infinity pool. Offering panoramic views of the coastal skyline, it serves as the ultimate threshold between the architecture and the horizon.</h3>
            </div>

        </div>

        <div className="amenitiesContent">

            <div className="amenitiesContentDescription">
                <p>Gastronomy</p>
                <h1>The Obsidian Room</h1>
                <br />
                <h3>A masterclass in culinary artistry. Our Michelin-starred chefs curate a seasonal menu that blends local heritage with avant-garde techniques, served in an atmosphere of hushed elegance.</h3>
            </div>

            <div className="amenitiesContentImage">
                <img src={gastronomy} alt="pool image" />
            </div>

            

        </div>

        <div className="amenitiesContent">
            <div className="amenitiesContentImage">
                <img src={wellness} alt="pool image" />
            </div>

            <div className="amenitiesContentDescription">
                <p>Wellness</p>
                <h1>Soma Luxury Spa</h1>
                <br />
                <h3>Retreat into a world of tactile serenity. Our spa offers bespoke holistic treatments, private hammams, and sensory relaxation rooms designed to realign mind and body.</h3>
            </div>

        </div>

        </>
    )
}

export default AmenitiesContent