

module.exports = class Alternative {
    constructor(
        id,
        title,
        weight,
        selected
    ) {
        this.id = id;
        this.title = title;
        this.weight = weight;
        this.selected = selected;
    }
}