function BuildJob({ id, started, running, success, profile, type }) {
    this.id = id;
    this.running = running;
    this.started = started;

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
