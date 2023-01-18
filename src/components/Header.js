import {Link} from 'react-router-dom'

function Header(prop){
    return(
        <nav className='nav'>
            <h1>Job Tracker</h1>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/signup'>
                <div>Sign-Up</div>
            </Link>
        </nav>
        
    )
}

export default Header