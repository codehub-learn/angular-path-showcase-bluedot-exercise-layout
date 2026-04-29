import { BaseModel } from "./base-model";

export interface CountryInfo extends BaseModel {
    name: string,
    capital: string,
    population: number
}