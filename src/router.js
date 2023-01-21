import { createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom"
import App from "./App"
import { jobTrackerLoader } from "./loaders"
import Index from "./pages/Index"
import UpdateForm from "./components/UpdateForm"
import { createAction, deleteAction, updateAction } from "./action"


const router = createBrowserRouter (

    createRoutesFromElements (
    <Route path="" element={<App/>}>
        <Route path="" element={<Index/>} loader={jobTrackerLoader}/>
        <Route path="/create" action={createAction}/>
        <Route path="/:id/delete" action={deleteAction}/>
        <Route path="/:id/edit" element={<UpdateForm/>}/>
        <Route path="/id:/update" action={updateAction}/>
    </Route>
    )
)

export default router