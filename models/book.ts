import { validGenres, validLanguages } from "@/app/api/book/add/route";
import Joi from "joi";


export const schema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    cover: Joi.string().uri().required(),
    description: Joi.string().max(1000).required(),
    forAdult: Joi.boolean().required(),
    genre: Joi.string().valid(...validGenres).required(),
    tags: Joi.array().items(Joi.string().min(1)).required(),
    lang: Joi.string().valid(...validLanguages).required(),
});