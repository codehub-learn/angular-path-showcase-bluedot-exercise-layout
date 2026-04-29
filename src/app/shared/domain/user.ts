import { BaseModel } from "./base-model";

export interface User extends BaseModel {
    fullname: string,
    email: string,
}