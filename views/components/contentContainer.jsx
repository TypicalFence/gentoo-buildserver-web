const React = require("react");
const PropTypes = require("prop-types");

function ContentContainer({ children, className }) {
    return (<div className={"content-container " + className}>{children}</div>);
}

ContentContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string
};

ContentContainer.defaultProps = {
    className: ""
};

module.exports = ContentContainer;
