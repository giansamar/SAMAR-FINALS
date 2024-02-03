import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/Top4.PNG'

const PostDetail = () => {
  return (
    
    <section className="post-detail">
      <div className="container post detail__container">
         <div className="post-detail_header">
          <PostAuthor/>
         <div className="post-detail__buttons">
          <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
          
        </div>
     </div>
     <h1>Top 4 Cars With The Most High-Tech Features In 2020.</h1>
     <div className="post-detail__thumbnail">
      <img src={Thumbnail} alt="" />
     </div>
     <p>
     If you’re into cars, luxury, and technology, then you landed on the right page! Considering the highest tech features, the following are the top-ranked cars available for sale in the market.
     </p>
     Corvette’s Chief engineer has come out with a statement that this car is designed with the installation of a highly advanced level of mechanics which makes it dominating against rivals.
     <p>
     Polestars, a Volvo sub-brand mission, is to expand its company’s electric reach throughout the globe. Its body structure is made up of carbon fiber.
     </p>
     Porsche Taycan reaches 0-100km/h in just 2.8 seconds. This amazing car is the DNA of Porsche company into a new automotive era.
     <p>
     Audi RS Q8 is known to be a real magical innovation of the Audi Industry. It is a mild hybrid version of Q8, that was introduced last year.
     </p>
     WE SAID THIS: Which is your favorite from the list?
      </div>
    
    </section>
  )
}

export default PostDetail
