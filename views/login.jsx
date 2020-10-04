const React = require("react");
const PropTypes = require("prop-types");
const DefaultLayout = require("./layouts/default");
const Box = require("./components/box.jsx");

function LoginForm({ loggedIn }) {
    return (
        <DefaultLayout title="login" loggedIn={loggedIn}>
            <Box className="login-form" >
                <h1>Login</h1>
                <form action="/login" method="post">
                    <input type="text" name="username" placeholder="Username" />
                    <input type="password" name="password" placeholder="Password" />
                    <button className="button" type="submit">Login</button>
                </form>
            </Box>
        </DefaultLayout>
    );
}

LoginForm.propTypes = {
    loggedIn: PropTypes.bool
};

module.exports = LoginForm;
