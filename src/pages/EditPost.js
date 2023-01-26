import SubmitPost from "../components/SubmitPost"
import { useParams } from "react-router-dom"

function EditPost(prop){
    const params = useParams()
    const queries = new URLSearchParams(window.location.search)
    return <div>
        <SubmitPost action={`/${params.id}/update`} data={JSON.parse(queries.get("data"))} titleMessage="Edit Posting" />
    </div>
}

export default EditPost