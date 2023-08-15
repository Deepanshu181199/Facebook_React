import './Navbar.css'
import {Search, Person, Chat, Notifications} from '@material-ui/icons'

function Navbar(){
    return(
        <>
        <div className="nav-container">

            <div className="left-div">
                <span className="logo">MyLogo...</span>
            </div>

            <div className="center-div">
                <div className="searchbar">
                    <Search className='search-icon'/>
                    <input type="text" placeholder='Search for friends, post or video' className="searchInput" />

                </div>
            </div>
            <div className="right-div">
                <div className="navbar-links">
                    <span className="navbar-link">HomePage</span>
                    <span className="navbar-link">TimeLine</span>
                </div>
                <div className="navbar-icons">
                    <div className="navbar-icon-item">
                        <Person/>
                        <span className="navbar-icon-badge">1</span>
                    </div>

                    <div className="navbar-icon-item">
                        <Chat/>
                        <span className="navbar-icon-badge">2</span>
                    </div>

                    <div className="navbar-icon-item">
                        <Notifications/>
                        <span className="navbar-icon-badge">3</span>
                    </div>

                </div>

                <img src="/Images/img1.jpg" alt="" className="navbar-img" />


            </div>
        </div>
        </>
    )
}

export default Navbar