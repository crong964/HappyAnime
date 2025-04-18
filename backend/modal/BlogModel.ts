import BaseModel from "./BaseModel";

export default class BlogModel extends BaseModel {
    id: string
    description: string
    title: string
    imageurl: string
    lang: string
    content: string
    time: string
    keywords: string
    blogtype: string
    constructor() {
        super()
        this.id = ""
        this.title = ""
        this.description = ""
        this.imageurl = ""
        this.lang = ""
        this.content = ""
        this.time = ""
        this.keywords = ""
        this.blogtype=""
    }
}