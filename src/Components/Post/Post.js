import './Post.css'
import { MoreVert } from '@material-ui/icons'
import {users} from '../../dummyData.js'
import { useState } from 'react'

function Post({post}){

    const [like, setLike] = useState(post.like)
    const [isliked, setisLiked] = useState(false)
    // users.filter(u=>u.id === 1)

    function likehandler(){
        setLike(isliked ? like-1 : like+1)
        setisLiked(!isliked)

    }
    return(
        <>
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={users.filter(u=>u.id === post?.userId)[0].profilePicture} alt="" className="post-profile-img" />
                        <span className="post-username">{users.filter(u=>u.id === post?.userId)[0].username}</span>
                        <span className="post-date">{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert/>
                    </div>
                </div>

                <div className="post-center">
                    <span className="post-text">{post?.desc}</span>
                    <img className='post-img' src={post.photo} alt="" />
                </div>

                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src="/Images/like.jpg" alt=""  onClick={likehandler} className="post-icon" />
                        <img src="/Images/heart.jpg" alt="" onClick={likehandler} className="post-icon" />
                        <span className="post-like-counter">{like} people liked</span>
                    </div>
                    <div className="post-bottom-right">
                        <div className="post-comment-text">
                            {post.comment} comments
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Post