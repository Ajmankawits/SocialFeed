import "./LikeDislike.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const LikeDislike = (props) => {



    return (
        <div>
            <button><ThumbUpButton /></button>
            <button><ThumbDownButton /></button>
        </div>
     );
}

export default LikeDislike; 