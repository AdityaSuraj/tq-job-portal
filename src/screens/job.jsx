import React from "react";
import Jobcard from "../components/jobcard";
// import Testcard from "../components/testcard";
import Header from "../components/header";
import Footer from "../components/footer";
// import Header from '../components/header'

export default function Job() {
  const [jobs, setJobs] = React.useState(null);

  const getJobPosts = () => {
    fetch('http://localhost:8000/jobs')
      .then((res) => res.json())
      .then((res) => {
        // setJob
        setJobs(
          res.data.map((job, index) => {
            return (
              <Jobcard key={index} job={job} />
            )
          })
        )
      })
  }

  React.useEffect(() => {
    getJobPosts();
  }, [])

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      <Header />
      {
        jobs
      }
      <Footer />

    </div>

  );
};

