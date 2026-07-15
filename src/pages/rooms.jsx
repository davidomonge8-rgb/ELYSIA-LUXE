import Header from '../components/Home/homeheader.jsx'
import Roomhero from '../components/Rooms/roomHero.jsx'
import Display from '../components/Rooms/roomsDisplay.jsx'
import Stardards from '../components/Rooms/standards.jsx'

import Footer from '../components/footer.jsx'

function Rooms(){
    return(
        <>
        <Header/>
        <Roomhero/>
        <Display/>
        <Stardards/>
        <Footer/>
        </>
    )
}

export default Rooms