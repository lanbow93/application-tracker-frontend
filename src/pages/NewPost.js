import SubmitPost from "../components/SubmitPost"
function NewPost(prop){
    return <div>
        <SubmitPost action="/createpost" />
    </div>
}

export default NewPost