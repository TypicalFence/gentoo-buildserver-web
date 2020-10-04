const React = require("react");
const PropTypes = require("prop-types");
const DefaultLayout = require("./layouts/default");
const JobCard = require("./components/jobCard.jsx");
const { BuildJob } = require("../src/models.js");

function Index({ jobs }) {
    return (
        <DefaultLayout className="index">
            {(() => jobs.map((j, id) => <JobCard key={id} job={j} />))()}
        </DefaultLayout>
    );
}

Index.propTypes = {
    jobs: PropTypes.arrayOf(PropTypes.objectOf(BuildJob)).isRequired
};

module.exports = Index;
