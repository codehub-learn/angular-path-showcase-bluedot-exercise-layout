import { BaseModel } from "./base-model";

export interface Bug extends BaseModel {
    dateUpdated?: Date,
    title: string,
    description: string,
    priority: number,
    reporter: string,
    status: string,
    comments: string[]
}