export type Book = {
    _id: string;
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