import './Rightbar.css'
import {users} from '../../dummyData.js'
import Online from '../Online/Online.js'
function Rightbar(){
    return(
        <>
        <div className="rightbar">
            <div className="rightbar-wrapper">
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
            </div>
        </div>
        </>
    )
}

export default Rightbar