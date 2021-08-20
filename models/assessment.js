const assessments = []

module.exports = class Assessment {

    constructor(
        microserviceOwner,
        microserviceName,
        categories,
        version,
        microserviceDomain,
        microserviceTeam,
        assessmentRespondent
    ) {
        this.microserviceName = microserviceName;
        this.microserviceOwner = microserviceOwner;
        this.categories = categories;
        this.version = version;
        this.microserviceDomain = microserviceDomain;
        this.microserviceTeam = microserviceTeam;
        this.assessmentRespondent = assessmentRespondent;
    }

    save() {
        assessments.push(this);
    }

    static fetchAll() {
        return assessments;
    }
}