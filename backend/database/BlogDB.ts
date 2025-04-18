import Mysql2 from "../Config"
import { QueryResult, ResultSetHeader } from "mysql2"
import BlogModel from "../modal/BlogModel"


class BlogDB {
    constructor() { }

    // async Add(p: BlogModel) {
    //     var sql = `INSERT INTO Blog (id, description, title,imageurl,lang,content,time,keywords,blogtype)
    //         VALUES (?,?,?,?,?,?,?,?,?);`
    //     var check
    //     check = await Mysql2.query(sql, [p.id, p.description, p.title, p.imageurl, p.lang, p.content, p.time, p.keywords, p.blogtype]) as ResultSetHeader
    //     return check
    // }
    // async Update(p: BlogModel) {
    //     var sql = `UPDATE Blog SET description=?,title=?,imageurl=?,lang=?,content=?,keywords=?,blogtype=? WHERE id=?`
    //     var check
    //     check = await Mysql2.query(sql, [p.description, p.title, p.imageurl, p.lang, p.content, p.keywords, p.blogtype, p.id]) as ResultSetHeader
    //     return check
    // }
    // async Delete(id: string) {
    //     var sql = `Delete from Blog where id=?`
    //     var check
    //     check = await Mysql2.query(sql, [id]) as ResultSetHeader
    //     return check
    // }
    async GetOtherBlog(p: BlogModel) {
        var sql = `SELECT * FROM Blog WHERE id !=? And time < ? AND blogtype = ?  ORDER BY time DESC Limit 0,6`
        var check
        check = await Mysql2.query(sql, [p.id, p.time, p.blogtype]) as ResultSetHeader
        return check
    }
    async GetBlogById(id: string) {
        var sql = `SELECT * FROM Blog WHERE id=? `
        var check
        check = await Mysql2.query(sql, [id]) as ResultSetHeader
        return check
    }
    // async GetAll() {
    //     var sql = `SELECT id,title,imageurl,time,description FROM Blog ORDER BY time DESC;`
    //     var check
    //     check = await Mysql2.query(sql, []) as ResultSetHeader
    //     return check
    // }
    async GetAllByBlogType(idblogtype: string) {
        var sql = `SELECT id,title,imageurl,time,description FROM Blog where blogtype=? ORDER BY time DESC;`
        var check
        check = await Mysql2.query(sql, [idblogtype]) as ResultSetHeader
        return check
    }
}
const blogDB = new BlogDB()

export default blogDB