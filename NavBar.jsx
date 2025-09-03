// import React from 'react'

// const NavBar = () => {
//   return (
//     <div id='indexinfo'>
//       <nav className='card'> 
      
//       <li>Home</li>
      
//      <li>About</li>
//       <li>Login</li>
//      <li>contact</li>
//             <li>cart</li>


//       </nav>
//     </div>
//   )
// }

// export default NavBar
import React from 'react'
import './Nav.css'
import {Link}  from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <nav>
            <Link to='/'>  
            <li>Home</li>
            </Link>
            <Link  to='/cart'> 
            <li>Cart</li>
            </Link>

        </nav>
    </div>
  )
}

export default NavBar
