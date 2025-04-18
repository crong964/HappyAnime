import { createPool } from "mysql2/promise"

const LOCALHOST = process.env.LOCALHOST;
const USER = process.env.USER
const DATABASE = process.env.DATABASE
const PASSWORD = process.env.PASSWORD || ""
const PORTDATABAE = process.env.PORTDATABAE


class Mysql2 {
    static db = createPool({
        host: LOCALHOST,
        user: USER,
        database: DATABASE,
        password: PASSWORD,
        waitForConnections: true,
        port: parseInt(PORTDATABAE + "" || "3306"),
        connectionLimit: 10,
        maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
        idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0
    })
    public static async query(sql: string, val: any[]) {
        var rows, fields
        try {
            [rows, fields] = await Mysql2.db.query(sql, val)
        } catch (error) {
            console.log(error);
        }
        return rows
    }
    public async query2(sql: string, val: any[]) {
        var rows, fields
        try {
            [rows, fields] = await Mysql2.db.query(sql, val)
        } catch (error) {
            console.log(error);
        }
        return rows
    }
}


export default Mysql2