const URL="http://localhost:5555"

export const jobsLoader = async () => {
    const response=await fetch(URL+'/jobs')
    const jobs=await response.json()
    return jobs
}

export const jobLoader = async ({params}) => {
    const response = await fetch(URL + `/jobs/${params.id}`)
    const job = await response.json()
    return job
}