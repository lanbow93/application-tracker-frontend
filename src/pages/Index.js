import {Form, Link, useLoaderData} from 'react-router-dom'

function Index(prop){

    const jobs= useLoaderData()
    console.log(jobs)
    return <div>
            <h1>My Job Tracker</h1>
            <div className="index">
                {jobs.map((job)=>{      
                    return <div>          
                        <h2>Title: {job.jobTitle}</h2>
                        <h3>{job.companyName}</h3>
                        <h3>${job.salary}</h3>
                        <Link to={`/${job._id}`} className='job'>Click for details</Link>
                        <Form action={`/${job._id}/delete`} method='post'>
                            <input type='submit' value={'X'}/>
                        </Form>
                    </div>   
                })}
        </div>
    </div>
}

export default Index