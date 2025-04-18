import { ResultSetHeader } from "mysql2";

export interface BaseService {
    Status(s: ResultSetHeader | undefined): boolean
}