import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { MdBackHand, MdBookmark, MdLocationPin, MdMoney, MdTimer } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { customRequest } from '../utilities/customRequest';
var Spinner = require('react-spinkit');



export default function SearchResultScreen() {
    const { city, role } = useParams();
    const [availableJobs, setAvailableJobs] = React.useState(null);
    const [selectedJob, setSelectedJob] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    const getJobs = () => {
        let data = {
            city: city,
            job: role
        }

        if (availableJobs == null) {
            setIsLoading(true);
            customRequest('job-list', data).then((res) => {
                if (res.message == "success") {
                    setIsLoading(false);
                    setAvailableJobs(res.jobs)
                    if (res.jobs.length > 0) {
                        setSelectedJob(res.selectedJob);
                    }
                }
            })
        } else {
            setAvailableJobs(availableJobs)
        }

    }

    useEffect(() => {
        getJobs();
    }, [])



    return (
        <div>
            <Header />
            {
                isLoading
                    ?
                    <div className="loader">
                        <Spinner name="three-bounce" />
                    </div>
                    :
                    availableJobs.length == 0
                        ?
                        <div className="placeholder">
                            <img src={require("../assets/empty_jobs.png")} alt="" />
                            <p>Oops! no any job found.</p>
                        </div>
                        :
                        <div className="src">
                            <div className="src__l">
                                {
                                    availableJobs.map((job, index) => {
                                        return <SearchResultJobCard key={index} job={job} selected={job._id == selectedJob._id} />
                                    })
                                }
                            </div>
                            <div className="src__r">
                                <div className="jd">
                                    <h2>{selectedJob.name}</h2>
                                    <div className="companyname">{selectedJob.companyName}</div>
                                    <div className="row">
                                        <span>{selectedJob.location}</span> · <span>Remote</span>
                                    </div>
                                    <div className="salaryrange">₹{selectedJob.salaryRangeStart} - ₹{selectedJob.salaryRangeEnd} a month</div>
                                    <div className="row">
                                        <button className="btn">Apply Now</button>
                                        <button className="btn">
                                            <MdBookmark />
                                        </button>
                                    </div>

                                    <hr />

                                    <div className="desc">
                                        <h5>Job Details</h5>
                                        <span>Consequat consectetur ad consequat in amet Lorem sunt.</span>
                                        <div className="tile">
                                            <div className="row">
                                                <MdMoney className='icon' />
                                                <span>Salary Range</span>
                                            </div>
                                            <div className="value">₹{selectedJob.salaryRangeStart} - ₹{selectedJob.salaryRangeEnd} a month</div>
                                        </div>
                                        <div className="tile">
                                            <div className="row">
                                                <MdMoney className='icon' />
                                                <span>Job Type</span>
                                            </div>
                                            <div className="value">Full Time</div>
                                        </div>
                                        <div className="tile">
                                            <div className="row">
                                                <MdMoney className='icon' />
                                                <span>Shift And Schedule</span>
                                            </div>
                                            <div className="value">Morning Shift</div>
                                        </div>
                                        <h5>Benefits &amp; Perks</h5>
                                        <p className="content">
                                            {
                                                selectedJob.description
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

            }
            <Footer />
        </div>
    )


    function SearchResultJobCard(props) {
        return (
            <div className="card" style={{ border: props.selected ? "2px solid blue" : "2px solid rgba(0,0,0,0.2)" }} onClick={() => { setSelectedJob(props.job) }}>
                <h2>{props.job.name}</h2>
                <p className='companyname'>{props.job.companyName}</p>
                <div className="row">
                    <MdLocationPin />
                    <span>Location</span>
                </div>
                <div className="wrap">
                    <div className="item">
                        <MdMoney />
                        <span>₹{props.job.salaryRangeStart} - ₹{props.job.salaryRangeEnd}</span>
                    </div>
                    <div className="item">
                        <MdBackHand />
                        <span>Full Time</span>
                    </div>
                    <div className="item">
                        <MdTimer />
                        <span>Morning Shift</span>
                    </div>
                </div>
                <div className="desc">
                    <ul>
                        <li>{props.job.description}</li>
                    </ul>
                </div>
                <div className="bottom">
                    <span>{props.job.created_at}</span>
                </div>
            </div>
        )
    }
}

