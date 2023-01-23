const URL = "https://my-job-tracker.onrender.com/";

export const jobTrackerLoader = async () => {
    const response = await fetch (URL + "/jobTracker");
    const jobTracker = await response.json();
    return jobTracker;
}