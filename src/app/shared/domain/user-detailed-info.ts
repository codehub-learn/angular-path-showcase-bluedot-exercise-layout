import { User } from "./user";

export interface UserDetailedInfo extends User {
    gender?: string
    avatar?: string,
    address?: string
}