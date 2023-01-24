import { createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom"
import { createPostAction, deletePostAction, updatePostAction } from "./action"
import { jobLoader } from "./loaders"
import EditPost from "./pages/EditPost"
import App from "./App"
import NewPost from "./pages/NewPost"
import Index from "./pages/Index"




const router = createBrowserRouter (

    createRoutesFromElements (
    <Route path="" element={<App/>}>
        <Route path="" element={<Index/>} loader={jobLoader}/>
        <Route path="/newpost" element={<NewPost />}/>
        <Route path="/create" action={createPostAction}/>
        <Route path="/:id/delete" action={deletePostAction}/>
        <Route path="/:id/edit" element={<EditPost />}/>
        <Route path="/:id/update" action={updatePostAction}/>
    </Route>
    )
)

export default router