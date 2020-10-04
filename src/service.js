const Docker = require("dockerode");
const { BuildJob, JobTypes } = require("./models.js");

async function getBuildServerContainers(docker) {
    let containers = await docker.listContainers({ all: true });
    containers = containers.filter(x => x.Image === "buildserver");

    return containers;
}

function parseContainerName(name) {
    const split = name.spilt("-");
    const timestamp = split.pop();
    let jobType = null;

    if (JobTypes.includes(split.slice(-1))) {
        jobType = split.pop();
    }

    const profile = split[0].replace("_", "/");

    return { profile, timestamp, jobType };
}

function containerToJob(container) {
    let nameMetadata;

    try {
        nameMetadata = parseContainerName(container.Names[0]);
    } catch {
        // return null when we can't parse the metadata from the container's name
        return null;
    }

    const id = container.Id;
    const profile = nameMetadata.profile;
    const type = nameMetadata.type;
    let running;
    let success;

    if (container.State === "Exited") {
        this.running = false;
        const statusString = container.Status.split(" ");
        const exitCode = statusString[1].replace("(", "").replace(")", "");
        success = exitCode !== "0";
    } else {
        running = true;
    }

    return new BuildJob({ id, profile, type, running, success });
}

class BuildService {
    constructor() {
        this.docker = new Docker();
    }

    async getJobs() {
        return getBuildServerContainers(this.docker).then(containers => {
            return containers.map(containerToJob).filter(x => x !== null);
        });
    }
}

module.exports = {
    BuildService
};
