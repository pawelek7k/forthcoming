import { ObjectId } from "mongodb";

export type Book = {
    _id: ObjectId;
    id: string;
    title: string;
    userId: string;
    date: string;
    cover: string;
    description: string;
    forAdult: boolean;
    genre: string;
    tags: string[];
    content?: string;
    lang: string;
}