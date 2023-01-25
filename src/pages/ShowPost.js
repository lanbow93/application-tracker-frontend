import { useLoaderData } from "react-router-dom"
import {Link} from 'react-router-dom'


function ShowPost(prop){
    const job=useLoaderData()
    return(
        <div className='job'>
            <h1>{job.companyName}</h1>
            <h2>{job.jobTitle}</h2>
            <h3>{job.comments}</h3>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <div>
                <input type='button' value="Add to Favorites" />
            </div>
            <div>
                <Link to={`/${job._id}/edit?data=${JSON.stringify(job)}`}>
                    <div>Update</div>
                </Link>
            </div>
            <Link to={`${job.link}`}>
                <div>Apply</div>
            </Link>
            
        </div>
    )
}

export default ShowPost