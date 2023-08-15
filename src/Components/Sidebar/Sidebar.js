import './Sidebar.css'
import {users} from '../../dummyData.js'
import Closefriends from '../Closefriends/Closefriends'
import {Bookmark, Group, HelpOutline, PlayCircleFilledOutlined, Chat, School, Event, RssFeed, WorkOutline} from '@material-ui/icons'

function Sidebar(){
    return(
        <>
        <div className="sidebar">
            <div className="sidebar-wrapper">
               <ul className="sidebar-list">

                <li className="sidebar-list-item">
                    <RssFeed className='sidebar-icon'/>
                    <span className="sidebar-list-item-text">feed</span>
                </li>

                <li className="sidebar-list-item">
                    <Chat className='sidebar-icon'/>
                    <span className="sidebar-list-item-text">Chats</span>
                </li>

                <li className="sidebar-list-item">
                    <PlayCircleFilledOutlined className='sidebar-icon'/>
                    <span className="sidebar-list-item-text">Videos</span>
                </li>

                <li className="sidebar-list-item">
                    <Group className='sidebar-icon'/>
                    <span className="sidebar-list-item-text">Groups</span>
                </li>

                <li className="sidebar-list-item">
                    <Bookmark className='sidebar-icon'/>
                    <span className="sidebar-list-item-text">Bookmarks</span>
                </li>

                <li className="sidebar-list-item">
                    <HelpOutline className='sidebar-icon'/>
                    <span className="sidebar-list-item-text">Questions</span>
                </li>

                <li className="sidebar-list-item">
                    <WorkOutline className='sidebar-icon'/>
                    <span className="sidebar-list-item-text">Jobs</span>
                </li>

                <li className="sidebar-list-item">
                    <Event className='sidebar-icon'/>
                    <span className="sidebar-list-item-text">Events</span>
                </li>

                <li className="sidebar-list-item">
                    <School className='sidebar-icon'/>
                    <span className="sidebar-list-item-text">Courses</span>
                </li>
               </ul>

               <button className="sidebar-button">Show More</button>
               <hr className="sidebar-hr" />
               <ul className="sidebar-frnd-list">

               {users.map((value)=>(

                <Closefriends key={value.id} friends = {value}/>


               ))
               }
               </ul>
            </div>
        </div>
        </>
    )
}

export default Sidebar