import '../componentsCss/footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="footersection">
                <h1>ELYSIA LUXE</h1>
                <br />
                <p>Redefining the standard of bespoke luxury and intuitive service since 1924.</p>
                
                <br /><br />
                <p>&copy; 2026 Elysia Luxe Hotel & Spa. All rights reserved.</p>
            </div>

            <div className="footersection">
                <h3>Contact Us</h3>
                <p>1224 Avenue des Champs-Élysées</p>
                <p>Paris, France 75008</p>
                <br />
                <p>+33 (0) 1 42 68 35 00</p>
                <p>concierge@elysialuxe.com</p>
                
            </div>

            <div className="footersection">
                <h3>Experience</h3>
                <p>Location</p>
                <p>Press</p>
                <p>Careers</p>
                <p>Privacy Policy</p>

            </div>

            <div className="footersection">
                <h3>Newsletter</h3>
                <p>Join our inner circle for exclusive updates and seasonal offers.</p>
                <input type="text" placeholder='Email Address'/>
            </div>
        </div>
    )
}

export default Footer