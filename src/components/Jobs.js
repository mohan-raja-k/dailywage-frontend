import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Jobs({ token }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/Job/getJob', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(response => {
      setJobs(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map(job => (
        <div key={job.jobId}>
          <h3>{job.jobTitle}</h3>
          <p>Location: {job.jobLocation}</p>
          <p>Pay: {job.jobPayPerDay} per day</p>
          <p>Status: {job.jobStatus}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
}

export default Jobs;