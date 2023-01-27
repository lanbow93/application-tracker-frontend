import { useLoaderData } from "react-router-dom"
import {Link} from 'react-router-dom'


function ShowPost(prop){
    const job=useLoaderData()
    const jobSalary = job.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') 
    
    return(
        <div className='job'>
            <img src="https://i.imgur.com/9uOKqTk.png" alt="Red thumbtack" className='thumbtack'/> 
            <h5>Title:</h5>
            <h4>{job.jobTitle}</h4>
            <h5>Company:</h5>
            <h4>{job.companyName}</h4>
            <h5>Salary:</h5>
            <h4>${jobSalary}</h4>
            <h5>Comments:</h5>
            <h4>{job.comments}</h4>
            <div className="d-flex justify-content-around">
                <button className="btn fav">Add to Favorites</button>
                <a href={job.link} target="_blank" rel="noopener noreferrer" ><button className="btn apply">Apply Here</button></a>
                <Link to={`/${job._id}/edit?data=${JSON.stringify(job)}`}>
                <button className="btn update">Update</button>
                </Link>
            </div>
        </div>
    )
}

export default ShowPost