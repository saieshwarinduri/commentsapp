import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails, changeLikedPosition, deleteCommentfromlist} = props
  const {name, comment, isliked, date, color, id} = commentDetails
  const runtime = formatDistanceToNow(date)
  const likeColor = isliked ? 'bules' : ''

  const whenOnclick = () => {
    changeLikedPosition(id)
  }
  const deleteComment = () => {
    deleteCommentfromlist(id)
  }

  return (
    <li className="listItem">
      <div className="profilenamecommentcontainer">
        <p className={`IconProfile ${color}`}>{name[0]}</p>
        <div>
          <div className="commentContainer">
            <h1 className="usernaem">{name}</h1>
            <p className="runtime">{runtime.concat(' ago')}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="commentlikedeleteContainer">
        <div className="likecontainer">
          {isliked && (
            <img
              className="likeImage"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              alt="like"
              onClick={whenOnclick}
            />
          )}
          {!isliked && (
            <img
              className="likeImage"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
              onClick={whenOnclick}
            />
          )}
          <button
            type="button"
            className={`like ${likeColor}`}
            onClick={whenOnclick}
          >
            Like
          </button>
        </div>
        <button
          id="delete"
          type="button"
          className="buttonON"
          onClick={deleteComment}
        >
          <img
            className="deleteImage"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
      <hr className="linebreak" />
    </li>
  )
}
export default CommentItem
