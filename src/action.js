import { redirect } from "react-router-dom";
const URL = "https://my-job-tracker.onrender.com"

export const createPostAction = async ({request, params}) => {
    const formData = await request.formData();
    const newPosting = {
        companyName: formData.get("companyName"),
        jobTitle: formData.get("jobTitle"),
        location: formData.get("location"),
        salary: formData.get("salary"),
        link: formData.get("link"),
        comments: formData.get("comments")
    }

    await fetch(URL + "/jobs", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPosting)
    })

    return redirect("/")
}

export const deletePostAction = async ({request, params}) => {
    await fetch(`${URL}/jobs/${params.id}`, {method: "delete"} )

    return redirect("/")
}

export const updatePostAction = async ({request, params}) => {
    const formData = await request.formData()
    const newPosting = {
        companyName: formData.get("companyName"),
        jobTitle: formData.get("jobTitle"),
        location: formData.get("location"),
        salary: formData.get("salary"),
        link: formData.get("link"),
        comments: formData.get("comments")
    }

    await fetch(URL + "/jobs/" + params.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPosting)
    })
    
    
    return redirect("/")
}