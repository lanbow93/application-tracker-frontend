const URL="https://my-job-tracker.onrender.com"

export const jobLoader = async () => {
    const response=await fetch(URL+'/jobs')
    const jobs=await response.json()
    return jobs
}