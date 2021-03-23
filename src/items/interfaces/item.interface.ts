import { Document } from 'mongoose'

export interface Item {
    // [x: string]: any;

    id?: string;
    name: string;
    description: string;
    quantity: number;
}
