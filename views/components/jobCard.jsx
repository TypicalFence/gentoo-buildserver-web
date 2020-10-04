const React = require("react");
const PropTypes = require("prop-types");
const { BuildJob } = require("../../src/models.js");
const Box = require("./box.jsx");
const Emoji = require("./emoji.jsx");

const JobCard = ({ job }) => {
    const emoji = (() => {
        if (!job.running) {
            if (job.sucess) {
                return <Emoji emoji="✔️" />;
            } else {
                return <Emoji emoji="❌" />;
            }
        }
    })();

    return <Box className="job-card">
        <div className="jc-head">
            <h3>{job.profile} {job.type} {emoji}</h3>
        </div>
        <div className="jc-body">
        </div>
    </Box>;
};

JobCard.propTypes = {
    job: PropTypes.objectOf(BuildJob).isRequired
};

module.exports = JobCard;
