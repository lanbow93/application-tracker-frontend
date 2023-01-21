import {Form} from 'react-router-dom'

function NewPost(props){
    <Form action='/create' method='post' className='formField'>
        <h2>Add A New Job</h2>
        <label>Company Name: </label>
        <input type='input' name='companyName' placeholder='company name' />
        <label>Job Title: </label>
        <input type='input' name='jobTitle' placeholder='job title' />
        <label>Salary: </label>
        <input type='number' name='salary' placeholder='salary' />
        <label>Job Link: </label>
        <input type='input' name='url' placeholder='http://' />
        <label>Comments</label>
        <input type='input' name='comments' placeholder='enter your comments' />
    </Form>
}

export default NewPost