const React = require("react");
const PropTypes = require("prop-types");
const Navbar = require("../components/navbar.jsx");
const ContentContainer = require("../components/contentContainer.jsx");

function DefaultLayout({ children, className, title }) {
    let pageTitle = "gentoo build server";

    if (title !== "") {
        pageTitle = title + " - " + pageTitle;
    }

    return (
        <html>
            <head>
                <title>{pageTitle}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/css/main.css" />
            </head>
            <body>
                <Navbar/>
                <div className={"main-content " + className}>
                    <ContentContainer>
                        {children}
                    </ContentContainer>
                </div>
            </body>
        </html>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    title: PropTypes.string
};

DefaultLayout.defaultProps = {
    className: "",
    title: ""
};

module.exports = DefaultLayout;
