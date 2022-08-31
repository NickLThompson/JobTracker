// importing the jobs model into this controller
// this is what connects our models to the MongoDB database; see Insomnia
import Jobs from "../models/Jobs";

// ~/Bootcamp/UNCC/18-NoSQL/01-Activities/25-Int-CRUD-Subdoc
// CRUD operations (Create, Read, Update, and Delete)

module.exports = {
    // grabbing and showing all jobs;
    getJobs(req, res) {
        // runs Jobs.find
        Jobs.find()
            // then prints all Jobs
            .then((jobs) => res.json(jobs))
            // otherwise it shows a 500 error and the error; Server error
            .catch((err) => res.status(500).json(err))
    },
    // grabbing a single job
    getSingleJob(req, res) {
        // grabbing that job based on its assigned id (i think?)
        Jobs.findOne({ _id: req.params.jobId })
            // prints the jobs
            .then((jobs) =>
                // if !jobs (not jobs) ? (expression if true; if jobs are not shown) show the message
                !jobs
                    ? res.status(404).json({ message: "No job found with this ID" })
                    // : (else if expression is false; if !jobs (not jobs) show the jobs)
                    : res.json(jobs)
            )
            // catching if there are errors then showing the error and giving a 500 server error response
            .catch((err) => res.status(500).json(err))
    },
    // creating a new job
    createJob(req, res) {
        // creating a job body?
        Jobs.create(req.body)
            // then showing the create job
            .then((jobs) => res.json(jobs))
            // if there is an error, print a 500 server error
            .catch((err) => console.log(err), res.status(500).json(err));
    },
    // updating a current job
    updateJob(req, res) {
        // finding the job you want to update based on its id
        Jobs.findOneAndUpdate(
            // job id
            { _id: req.params.jobId },
            // setting the new information in the request body
            { $set: req.body },
            // checking if the document if valid, "new: true" shows the updated information
            { runValidators: true, new: true }
        )
    },
    deleteJob(req, res) {
        Jobs.findOneAndRemove({ _id: req.params.jobId })
            .then((jobs) => 
                !jobs
                    ? res.status(404).json({ message: "No jobs with this id!" })
                    : res.json({ message: "Job successfully deleted!" })
            )
            .catch((err) => res.status(500).json(err));
    }
};