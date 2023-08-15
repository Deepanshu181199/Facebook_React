import Navbar from '../../Components/Navbar/Navbar.js'
import Sidebar from '../../Components/Sidebar/Sidebar.js'
import Feed from '../../Components/Feed/Feed.js'
import Rightbar from '../../Components/Rightbar/Rightbar.js'
import './Home.css'

function Home(){
    return(
        <>
        <Navbar/>
        <div className="home-container">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
        </>
    )
}

export default Home