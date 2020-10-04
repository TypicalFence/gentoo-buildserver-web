const React = require("react");

function Navbar(props) {
    return (<div className="navbar">
        <a className="navbar-link navbar-title" href="/">
            Gentoo Build Server
        </a>
        <div className="navbar-right">
        </div>
    </div>);
}

module.exports = Navbar;
