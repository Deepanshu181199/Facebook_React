import './Rightbar.css'
import {users} from '../../dummyData.js'
import Online from '../Online/Online.js'
function Rightbar({profile}){

    function HomeRightbhar(){
        return(
            <>
             <div className="birthday-container">
                    <img className='birthday-img' src="Images/gift.jpg" alt="" />
                    <span className="birthday-text"><b>Pola foster</b> & <b>3 other</b> have birthdays today</span>
                </div>

                <img src="Images/ad.jpg" alt="" className="rightbar-ad" />
                <h4 className="righbar-title">Online Friends</h4>
                <ul className="rightbar-friend-list">
                    
                    {users.map((value)=>(
                        <Online key = {value.id} user = {value}/>

                    ))
                    }
                    
                </ul>
            </>
        )
    }

    function ProfileRightbar(){
        return(
            <>
            <h4 className='rightbar-title'>User Information </h4>
            <div className="rightbar-info">
                <div className="rightbar-info-item">
                    <span className="rightbar-info-key">City:</span>
                    <span className="rightbar-info-value">New York</span>
                </div>

                <div className="rightbar-info-item">
                    <span className="rightbar-info-key">from:</span>
                    <span className="rightbar-info-value">palwal</span>
                </div>

                <div className="rightbar-info-item">
                    <span className="rightbar-info-key">relationship:</span>
                    <span className="rightbar-info-value">single</span>
                </div>

            </div>

            <h4 className="rightbar-title">User Frnds</h4>
            <div className="rightbar-followings">
                <div className="rightbar-following">
                    <img src="Images/person6.jpg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-following-name">Baniya</span>
                </div>

                <div className="rightbar-following">
                    <img src="Images/person6.jpg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-following-name">Baniya</span>
                </div>
                
                <div className="rightbar-following">
                    <img src="Images/person6.jpg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-following-name">Baniya</span>
                </div>

                <div className="rightbar-following">
                    <img src="Images/person6.jpg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-following-name">Baniya</span>
                </div>

                <div className="rightbar-following">
                    <img src="Images/person6.jpg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-following-name">Baniya</span>
                </div>
                
                <div className="rightbar-following">
                    <img src="Images/person6.jpg" alt="" className="rightbar-following-img" />
                    <span className="rightbar-following-name">Baniya</span>
                </div>
            </div>
            </>
        )
    }
    return(
        <>
        <div className="rightbar">
            <div className="rightbar-wrapper">
               {profile ? <ProfileRightbar/> : <HomeRightbhar}
            </div>
        </div>
        </>
    )
}

export default Rightbar