const React = require("react");
const PropTypes = require("prop-types");
const friendlyTime = require("friendly-time");
const { BuildJob } = require("../../src/models.js");
const Box = require("./box.jsx");
const Emoji = require("./emoji.jsx");

const JobCard = ({ job }) => {
    const emoji = (() => {
        if (!job.running) {
            if (job.success) {
                return <Emoji emoji="✔️" />;
            } else {
                return <Emoji emoji="❌" />;
            }
        }

        return <Emoji emoji="🚂"/>;
    })();

    const time = friendlyTime(job.started);

    return <div className="job-card" data-id={job.id}>
        <Box>
            <div className="jc-head">
                <h3>{job.profile} {job.type} {emoji}</h3>
            </div>
            <div className="jc-body">
                <span title={job.started.toISOString()}>{time}</span>
            </div>
        </Box>
    </div>;
};

JobCard.propTypes = {
    job: PropTypes.objectOf(BuildJob).isRequired
};

module.exports = JobCard;
