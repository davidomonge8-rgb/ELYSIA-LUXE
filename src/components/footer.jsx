import '../componentsCss/footer.css'
import {useState} from 'react'
import {supabase} from '../config/supabaseClient.js' 

function Footer(){

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [statusMsg, setStatusMsg] = useState('')

    const handleSendRequest = async () => {
        //email vali
        if(!email.trim() || !email.includes('@')){
            setStatusMsg('Enter a valid Email')
        }

        setLoading(true)
        setStatusMsg('')

        const {error} = await supabase.from('newsLetter').insert([{Email_Address: email}])

        setLoading(false)

        if(error){
            console.error('Supabase error:', error)
            setStatusMsg('Something went wrong in sending the email')
        }else{
            setStatusMsg('Thanks for subscribing')
            setEmail('')
        }
        

    }



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
                <input type="text" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
                
                <button className='newsLetterButton' onClick={handleSendRequest} disabled={loading}>
                    {loading ? 'Sending...' : 'Send Request'} 
                </button>

                {statusMsg && ( <p style={{ marginTop: '8px', fontSize: '0.9rem', color: statusMsg.includes('wrong') ? '#c0392b' : '#27ae60' }}> {statusMsg}</p>)}
            

            </div>
        </div>
    )
}

export default Footer