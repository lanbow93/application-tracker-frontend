import {Link} from 'react-router-dom'

function Header(prop){
    return(
        <nav className='nav'>
            <h1>Job Tracker</h1>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/newpost'>
                <div>New Post</div>
            </Link>
            <Link to='/favorites'>
                <div>Favorites</div>
            </Link>
            <Link to='/applied'>
                <div>Applied</div>
            </Link>
        </nav>
        
    )
}

export default Header