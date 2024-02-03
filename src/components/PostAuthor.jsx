import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar0.jpg'

const PostAuthor = () => {
  return (
 <Link to={`/posts/users/sdfsdf`}>
    <div className="post_author-avatar">
        <img src={Avatar} alt="" />
        </div> 
 <div className="post__author-details">
      <h5>By: Art Nes</h5>
      <small>Just Now</small>
 </div>
 
 </Link>
  )
}

export default PostAuthor
