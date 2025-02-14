import {useState} from 'react'
import './App.css';

function LikeButton() {
    
let [isLiked ,setIsLiked] = useState(false);
 let toggleLike = () => {
    setIsLiked(!isLiked);
 };
  return (
    <div><h3>LikeButton</h3>
    <p onClick={toggleLike}>
      {isLiked ? (<i className="fa-solid fa-heart"></i>)
      :( <i className="fa-regular fa-heart"></i>

      )}
      </p>
    </div>
  )
}

export default LikeButton