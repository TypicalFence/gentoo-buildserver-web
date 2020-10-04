function BuildJob({ id, running, success, profile, type }) {
    this.id = id;
    this.running = running;

    if (running) {
        this.success = null;
    } else {
        this.success = success;
    }

    this.profile = profile;
    this.type = type;
};

const JobTypes = ["sync", "build"];

module.exports = {
    BuildJob,
    JobTypes
};
