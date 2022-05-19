import "./singlePost.css"
import img from "./stone.jpg"
export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
            className="singlePostImg"
            src={img} alt=""  />
            <h1 className="singlePostTitle">Lorem ipsum, dolor sit 
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Katha</b></span>
                <span className="sinlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio perspiciatis reiciendis pariatur
                veritatis qui ad, quia, voluptatum soluta aliquam dolore neque, ipsam temporibus. Doloremque, deserunt
                excepturi incidunt quod nostrum explicabo quas inventore voluptatem nobis officiis numquam necessitatibus.
                Eaque, vitae. Voluptatibus aspernatur aperiam accusamus? Quos cum ex dignissimos placeat necessitatibus,
                libero doloribus sint magnam iure laudantium ullam illum. Veniam porro debitis laboriosam delectus inventore 
                temporibus soluta nulla facilis consequuntur. Autem libero ratione sed dolore distinctio. Nulla, voluptates exercitationem 
                veniam sed dolorem quidem ipsa et in ex cumque cupiditate error illo rem aspernatur reprehenderit facere repudiandae natus sit praesentium culpa amet fugiat totam ab consectetur. Voluptate eius, harum est repudiandae iste ea rem unde sequi, voluptatem quo impedit nulla consectetur nam officiis tempore architecto inventore ipsum quos vero. Repellat consequatur officiis quo id architecto voluptates omnis distinctio tempora quaerat sapiente asperiores non ea totam cumque sit, dolore modi saepe quae, similique delectus maiores blanditiis! Fugit minus doloremque saepe, aliquam quis assumenda! Porro minus itaque dolorum magni molestias sapiente. Doloremque eligendi alias, quos ex nostrum suscipit praesentium consequatur assumenda maxime, nobis dolorem voluptatum rem molestias? Adipisci molestiae quod aliquam earum? Cupiditate, 
                necessitatibus deserunt? Obcaecati quia voluptatibus quae, unde assumenda ex culpa quidem adipisci.</p>
        </div>
    </div>
  )
}
