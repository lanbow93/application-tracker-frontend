import SubmitPost from "../components/SubmitPost"
function NewPost(prop){
    return <div>
        <SubmitPost action="/createpost" titleMessage="New Posting" />
    </div>
}

export default NewPost