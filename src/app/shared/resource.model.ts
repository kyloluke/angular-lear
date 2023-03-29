export class Resource {
    _id: string;
    title: string;
    description: string;
    type: string;
    link: string;
    

    constructor({_id = '', title = '', description = '', type = '', link = ''} = {}) {
        this._id = _id;
        this.title = title;
        this.description = description
        this.type = type
        this.link = link
    }
}