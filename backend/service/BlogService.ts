import { ResultSetHeader } from "mysql2";
import { BaseService } from "./BaseService";
import BlogModel from "../modal/BlogModel";
import blogDB from "../database/BlogDB";

class BlogService implements BaseService {

    constructor() {

    }
    Status(s: ResultSetHeader | undefined) {
        return s == undefined ? false : s.affectedRows == 1
    }
    RemoveAccents(str: string) {
        return str
            .normalize("NFD") // Chuẩn hóa Unicode dạng NFD (Normalization Form Decomposition)
            .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các ký tự tổ hợp (dấu)
            .replace(/đ/g, "d") // Thay 'đ' thành 'd'
            .replace(/Đ/g, "D")
            .replace(/ /g, "-") // Thay 'Đ' thành 'D'
            .replace(/[^a-zA-Z-0-9]/g, '')
    }
    // async Add(p: BlogModel) {
    //     const check = await blogDB.Add(p)
    //     return this.Status(check)
    // }
    // async Update(p: BlogModel) {
    //     const check = await blogDB.Update(p)
    //     return this.Status(check)
    // }
    // async Delete(p: string) {
    //     const check = await blogDB.Delete(p)
    //     return this.Status(check)
    // }
    async GetBlogById(id: string): Promise<BlogModel | undefined> {
        let s = await blogDB.GetBlogById(id)
        return this.SetList(s)[0]
    }
    async GetOtherBlog(b: BlogModel) {
        let s = await blogDB.GetOtherBlog(b)
        return this.SetList(s)
    }
    // async GetAll() {
    //     let s = await blogDB.GetAll()
    //     return this.SetList(s)
    // }
    private SetList(any: any) {
        let list: BlogModel[] = []
        if (any == undefined) {
            return []
        }

        for (let i = 0; i < any.length; i++) {
            const element = any[i];
            let acc = new BlogModel();
            acc.setAll(element);
            list.push(acc);
        }
        return list
    }
    async GetAllByBlogType(idblogtype: string) {
        let check
        check = await blogDB.GetAllByBlogType(idblogtype)
        return this.SetList(check)
    }
}

const blogService = new BlogService()

export default blogService