const React = require("react");
const PropTypes = require("prop-types");
const { BuildJob } = require("../../src/models.js");
const Box = require("./box.jsx");
const Emoji = require("./emoji.jsx");

const JobCard = ({ job }) => {
    return <Box className="job-card">
        <div className="jc-head">
            <h3>{job.profile}</h3>
            <h5>{job.type}</h5>
        </div>
        <div className="jc-body">
            {(() => {
                if (!job.running) {
                    if (job.sucess) {
                        return <Emoji emoji="✔️" />;
                    } else {
                        return <Emoji emoji="❌" />;
                    }
                }
            })()}
        </div>
    </Box>;
};

JobCard.propTypes = {
    job: PropTypes.objectOf(BuildJob).isRequired
};

module.exports = JobCard;
