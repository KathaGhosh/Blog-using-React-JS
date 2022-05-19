import "./post.css"
import img from './stone.jpg'
export default function Post() {
  return (
    <div className="post">
        <img 
        className="postImg"
        src={img} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Life</span>
                <span className="postCat">Music</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet consectetur.</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ducimus corrupti, sequi atque ullam, molestias,
           neque laudantium earum delectus voluptas quo sunt doloremque ab provident possimus ex fugiat mollitia ut.
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ducimus corrupti, sequi atque ullam, molestias,
           neque laudantium earum delectus voluptas quo sunt doloremque ab provident possimus ex fugiat mollitia ut.
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ducimus corrupti, sequi atque ullam, molestias,
           neque laudantium earum delectus voluptas quo sunt doloremque ab provident possimus ex fugiat mollitia ut.
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ducimus corrupti, sequi atque ullam, molestias,
           neque laudantium earum delectus voluptas quo sunt doloremque ab provident possimus ex fugiat mollitia ut.
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis ducimus corrupti, sequi atque ullam, molestias,
           neque laudantium earum delectus voluptas quo sunt doloremque ab provident possimus ex fugiat mollitia ut.
        </p>
    </div>
  )
}
