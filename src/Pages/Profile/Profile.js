import './Profile.css'
import Navbar from '../../Components/Navbar/Navbar.js'
import Sidebar from '../../Components/Sidebar/Sidebar.js'
import Feed from '../../Components/Feed/Feed.js'
import Rightbar from '../../Components/Rightbar/Rightbar.js'

function Profile(){
    return(
        <>
          <Navbar/>
        <div className="profile">
          <Sidebar/>
         <div className="profile-right">
            <div className="profile-right-top">
                <div className="profile-cover">
                <img className='profile-cover-img' src="Images/post3.jpg" alt="" />
                <img className='profile-user-img' src="Images/person4.jpg" alt="" />
                </div>
                <div className="profile-info">
                    <h4 className='profile-info-name'>deepanshu bansal</h4>
                    <span className='profile-info-desc'>hello frnds</span>
                </div>
            </div>
            <div className="profile-right-bottom">

          <Feed/>
          <Rightbar profile/>
            </div>
         </div>
        </div>
        </>
    )
}

export default Profile