const React = require("react");
const PropTypes = require("prop-types");
const twemoji = require("twemoji");

const Emoji = ({ emoji }) => (
    <span
        dangerouslySetInnerHTML={{
            __html: twemoji.parse(emoji, {
                folder: "svg",
                ext: ".svg"
            })
        }}
    />
);

Emoji.propTypes = {
    emoji: PropTypes.string
};

module.exports = React.memo(Emoji);
