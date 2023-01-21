import {Form, Link, useLoaderData} from 'react-router-dom'

function Index(prop){

    const jobs= useLoaderData()

    return <div>
            <h1>My Job Tracker</h1>
            <div className="index">
                {jobs.map((job)=>{      
                    <div>          
                        <h2>{`${job.jobTitle}`}</h2>
                        <h3>{`${job.companyName}`}</h3>
                        <h3>{`${job.salary}`}</h3>
                        <Link to={`/${job._id}`} className='job'>Click for details</Link>
                        <Form action={`/delete/${job._id}`} method='post'>
                            <input type='submit' value={'X'}/>
                        </Form>
                    </div>   
                })}
        </div>
    </div>
}

export default Index