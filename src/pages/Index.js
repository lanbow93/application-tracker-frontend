import {Form, Link, useLoaderData} from 'react-router-dom'
import {Card} from 'react-bootstrap';

function Index(prop){
    const jobs= useLoaderData()
    return  <div >
                {/* <h1>My Job Tracker</h1> */}
                <div className="index">
                    {jobs.map((job, index)=>{     
                        // let num = job.salary
                        // let jobSalary = num.toLocalString() 
                        return <div className={`cardContainer`}>  
                            <Card style={{ width: '20rem', margin: '10px'}}>
                            <Card.Body className={(index%4)+1}>
                            <img src="https://i.imgur.com/9uOKqTk.png" alt="Red thumbtack" className='thumbtack'/>       
                            <h5>Title:</h5>
                            <h4>{job.jobTitle}</h4>
                            <h5>Company:</h5>
                            <h4>{job.companyName}</h4>
                            <h5>Salary:</h5>
                            <h4>${job.salary}</h4>
                            
                            <Link to={`/${job._id}`} >Click for details</Link>
                            <Form action={`/${job._id}/delete`} method='post'>
                                <input type='submit' value={'Delete Post'}/>
                            </Form>
                            </Card.Body> 
                            </Card>
                           
                        </div>   
                    })}
                </div>
            </div>
}

export default Index