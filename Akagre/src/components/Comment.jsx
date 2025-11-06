import { FaStar } from "react-icons/fa";
import './comment.css'

function Comment ({context, image, name}){

    return(
        <div className="comment">
            <div className="rate-stars">
                <FaStar size={24}/><FaStar size={24}/><FaStar size={24}/><FaStar size={24}/><FaStar size={24}/>
            </div>
            <p className="comment-context">{context}</p>
            <div className="profile-name">
                <img src={image} alt="profile pic"/>
                <p>{name}</p>
            </div>
            
        </div>
            
    )

}
export default Comment