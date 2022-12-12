import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem/index'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {list: [], name: '', comment: '', count: 0}

  onchangeName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onchangeComment = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  onSubmitresult = event => {
    event.preventDefault()
    const {name, comment, count} = this.state
    const color1 = initialContainerBackgroundClassNames[count % 7]

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isliked: false,
      color: color1,
    }

    this.setState(prevState => ({
      list: [...prevState.list, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  changeLikedPosition = id => {
    this.setState(prevState => ({
      list: prevState.list.map(eachList => {
        if (eachList.id === id) {
          const t = {...eachList, isliked: !eachList.isliked}
          console.log(t)
          return t
        }
        return eachList
      }),
    }))
  }

  deleteCommentfromlist = id => {
    const {list} = this.state
    const h = list.filter(each => each.id !== id)

    this.setState({
      list: h,
    })
  }

  render() {
    const {list, name, comment} = this.state

    return (
      <div className="main_contianer">
        <div className="smallcontainer">
          <h1 className="heading">Comments</h1>
          <div className="image_content_container">
            <div className="contentContainer">
              <p className="paragraphOfsaysomething">
                Say something about 4.0 Technologies
              </p>
              <form className="formContainer" onSubmit={this.onSubmitresult}>
                <input
                  className="imputName"
                  rows="5"
                  cols="70"
                  placeholder="Your name"
                  onChange={this.onchangeName}
                  value={name}
                />
                <textarea
                  className="CommentsInput"
                  rows="5"
                  cols="70"
                  placeholder="Your Comment"
                  onChange={this.onchangeComment}
                  value={comment}
                />
                <button
                  className="buttonadd"
                  type="submit"
                  onClick={this.onclickButton}
                >
                  Add Comment
                </button>
              </form>
            </div>
            <img
              className="imageSide"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr />
          <div className="countContainer">
            <p className="count">{list.length}</p>
            <p className="commentscountname">comments</p>
          </div>

          <ul className="listContinar">
            {list.map(each => (
              <CommentItem
                commentDetails={each}
                changeLikedPosition={this.changeLikedPosition}
                deleteCommentfromlist={this.deleteCommentfromlist}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
