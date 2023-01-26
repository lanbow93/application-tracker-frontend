import {Form, Link, useLoaderData} from 'react-router-dom'
import {Card} from 'react-bootstrap';

function Index(prop){
    const jobs= useLoaderData()
    return  <div>
                {/* <h1>My Job Tracker</h1> */}
                <div className="index">
                    {jobs.map((job)=>{      
                        return <div>  
                            <Card style={{ width: '18rem', margin: '10px'}}>
                            <Card.Body>       
                            <h2>Title: {job.jobTitle}</h2>
                            <h3>{job.companyName}</h3>
                            <h3>${job.salary}</h3>
                            <Link to={`/${job._id}`} className='job'>Click for details</Link>
                            <Form action={`/${job._id}/delete`} method='post'>
                                <input type='submit' value={'X'}/>
                            </Form>
                            </Card.Body> 
                            </Card>
                           
                        </div>   
                    })}
                </div>
            </div>
}

export default Index