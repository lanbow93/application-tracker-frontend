import {Form} from 'react-router-dom'

function SubmitPost(props){
    <Form action='/create' method='post' className='postFormField'>
        <h2>{props.titleMessage}</h2>
        <label>Company Name: </label>
        <input type='input' name='companyName' placeholder='company name' defaultValue={props?.data?.companyName} />
        <label>Job Title: </label>
        <input type='input' name='jobTitle' placeholder='job title' defaultValue={props?.data?.jobTitle} />
        <label>Salary: </label>
        <input type='number' name='salary' placeholder='salary' defaultValue={props?.data?.number} />
        <label>Job Link: </label>
        <input type='input' name='url' placeholder='http://' defaultValue={props?.data?.url} />
        <label>Comments</label>
        <input type='input' name='comments' placeholder='enter your comments' defaultValue={props?.data?.input} />
        <input type="submit" value={props.value} />
    </Form>
}

export default SubmitPost