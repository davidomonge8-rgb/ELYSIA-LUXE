import '../../componentsCss/Home/spaces.css'
import grand from "../Home/images/grand.jpg"
import terrace from "../Home/images/terrace.jpg"
import loft from "../Home/images/loft.jpg"

function Spaces(){
    return(
        <div className="spaces">
            <div className="spaceshead">
                <h1>Curated Living Spaces</h1>
                <h2>Each suite is a masterclass in modern European design and artisanal comfort.</h2>
            </div>

            <div className="spacesexample">
                <div className="room">
                    <img src={grand} alt="" />
                    <p>FROM $1,200 / NIGHT</p>
                    <h2>Grand Heritage Suite</h2>
                    <h3>Our most prestigious accommodation featuring panoramic city views.</h3>
                    <h4>View Details</h4>
                </div>

                <div className="room">
                    <img src={terrace} alt="" />
                    <p>FROM $850 / NIGHT</p>
                    <h2>Zen Terrace Suite</h2>
                    <h3>A private sanctuary designed for ultimate meditative relaxation.</h3>
                    <h4>View Details</h4>
                </div>

                <div className="room">
                    <img src={loft} alt="" />
                    <p>FROM $600 / NIGHT</p>
                    <h2>The Artisan Loft</h2>
                    <h3>Modern urban living meets handcrafted luxury in our loft collection.</h3>
                    <h4>View Details</h4>
                </div>
            </div>
        </div>
    )
}

export default Spaces