import React, { useState } from 'react';
import "./LikeDislike.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const LikeDislike = (props) => {
    const [likeButtonClass, setLikeButtonClass] = useState("black")
    const [dislikeButtonClass, setDislikeButtonClass] = useState("black")

    const handleLikeClick = () => {
        if(likeButtonClass === "black"){
            setLikeButtonClass("gold")
            setDislikeButtonClass("black")
        }
        else{
            setLikeButtonClass("black")
        }
    }

    const handleDislikeClick = () => {
        if(dislikeButtonClass === "black"){
            setDislikeButtonClass("red")
            setLikeButtonClass("black")
        }
        else{
            setDislikeButtonClass("black")
        }
    }



    return (
        <div>
            <button className={likeButtonClass} onClick={handleLikeClick}><ThumbUpIcon /></button>
            <button className={dislikeButtonClass} onClick={handleDislikeClick}><ThumbDownIcon /></button>
        </div>
     );
}

export default LikeDislike; 