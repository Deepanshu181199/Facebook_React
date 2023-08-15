import './Feed.css'
import Share from '../Share/Share.js'
import Post from '../Post/Post.js'
import {posts} from '../../dummyData.js'
function Feed(){
    return(
        <>
        <div className="feed">
            <div className="feed-wrapper">
                <Share/>

               { posts.map((p)=>(
                
                
                
                   <Post key={p.id} post={p}/>
                
               ))
               }
                
            </div>
            
        </div>
        </>
    )
}

export default Feed