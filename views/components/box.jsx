const React = require("react");
const PropTypes = require("prop-types");

function Box({ children, className }) {
    return (<div className={"box " + className}>{children}</div>);
}

Box.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string
};

Box.defaultProps = {
    className: ""
};

module.exports = Box;
