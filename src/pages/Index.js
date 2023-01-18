import {Form, Link, userLoaderData} from 'react-router-dom'

function Index(prop){
    const jobs=userLoaderData()
    return(
        <div>
            <h1>My Job Tracker</h1>
            <div className="index">
            {jobs.map((job)=>{      
                <div>          
                    <h2>{`${job.jobTitle}`}</h2>
                    <h3>{`${job.companyName}`}</h3>
                    <h3>{`${job.salary}`}</h3>
                    <Link to={`/${job._id}`} className='job'>Click for details</Link>
                </div>   
            })}
        </div>
       </div>
        
    )
}

export default Index