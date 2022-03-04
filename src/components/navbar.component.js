import './navbar.component.css'
import { Link, useNavigate } from 'react-router-dom'

function Navbar () {
    const navigate = useNavigate()
    const logout = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
        navigate('/signin')
      }
   return (
       <nav className='navbar'>
           <div className="nav-left">
                Blogs.com!
           </div>
           <div className='nav-center'>
               <a href='/blog-details' className='nav-link'>Home🏠</a>
               <a href='/blog-create' className='nav-link'>Create✍️</a>
               <a href='/blog-list' className='nav-link'>Your Blogs🤓</a>
               <a href='/profile' className='nav-link'>Your Profile😄</a>
           </div>
           <div className="nav-right">
                <button onClick={logout}
                style={{float: 'right'}}
                className='btn btn-warning'>LogOut</button>
           </div>
       </nav>
   )
}

export default Navbar