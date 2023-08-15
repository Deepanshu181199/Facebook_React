function Closefriends({friends}){
    return(
        <>
         <li className="sidebar-frnd-list-item">
                    <img className='sidebar-frnd-img' src={friends.profilePicture} alt="" />
                    <span className="sidebar-frnd-name">{friends.username}</span>

                </li>
        </>
    )
}

export default Closefriends