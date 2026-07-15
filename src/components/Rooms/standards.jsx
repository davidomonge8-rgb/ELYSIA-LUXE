import '../../componentsCss/Rooms/standards.css'
import towel from '../../components/Rooms/images/towel.jpg'

function Stardards(){
    return(
        <div className="standards">
            <div className="content">
                <h2>THE ELYSIA STANDARD</h2>

                <h1>Every stay is defined by the invisible touch of excellence.</h1>
                
                <div id='small-section'>

                </div>
            </div>

            <div className="image">
                <img src={towel} alt="" />
            </div>
        </div>
    )
}

export default Stardards