const URL="http://localhost:5555"

export const jobLoader = async () => {
    const response=await fetch(URL+'/jobs')
    const jobs=await response.json()
    return jobs
}