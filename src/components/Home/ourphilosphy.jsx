import '../../componentsCss/Home/ourphilosphy.css'
import pillowImg from './images/pillow.jpg'

function Ourphilosphy(){
    return(
        <div className="philosophy">
            
            <div className="philosophyContent">
                <h2>Our Philosophy</h2>
                <h1>Luxury Defined by Silence and Detail</h1>
                <p>At Elysia Luxe, we believe that true luxury isn't found in noise, but in the deliberate attention to the smallest details. From the thread count of our linens to the precise temperature of your welcome tea, every element is choreographed for your serenity. </p>
                
            </div>

            <div className="philosophyImage">
                <img src={pillowImg} alt="Luxury pillow detail" />
            </div>

        </div>
    )

}
export default Ourphilosphy