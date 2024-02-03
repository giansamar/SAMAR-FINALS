import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <footer>
    <ul className="footer__categories">
        <li><Link to="/posts/categories/:Audi">Audi</Link></li>
        <li><Link to="/posts/categories/:Chevrolet">Chevrolet</Link></li>
        <li><Link to="/posts/categories/:BMW">BMW</Link></li>
        <li><Link to="/posts/categories/:Ferrari">Ferrari</Link></li>
        <li><Link to="/posts/categories/:Toyota">Toyota</Link></li>
        <li><Link to="/posts/categories/:Alfa Romeo">Alfa Romeo</Link></li>
        <li><Link to="/posts/categories/:Bentley">Bentley</Link></li>
        <li><Link to="/posts/categories/:Cadillac">Cadillac</Link></li>
    </ul>
     <div className="footer__copyright">
      <small>All Rights Reserved &copy; Copyright, EGATOR Tutorials.</small>
     </div>


   </footer>
  )
}

export default Footer
