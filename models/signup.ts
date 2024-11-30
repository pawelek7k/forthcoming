import Joi from "joi";

export const schema = Joi.object({
    username: Joi.string()
        .min(3)
        .max(20)
        .required()
        .alphanum()
        .messages({
            'string.base': `"username" should be a type of 'text'`,
            'string.empty': `"username" cannot be an empty field`,
            'string.min': `"username" should have a minimum length of {#limit}`,
            'string.max': `"username" should have a maximum length of {#limit}`,
            'string.alphanum': `"username" should only contain alpha-numeric characters`,
            'any.required': `"username" is a required field`,
        }),
    email: Joi.string()
        .required()
        .messages({
            'string.base': `"email" should be a type of 'text'`,
            'string.empty': `"email" cannot be an empty field`,
            'string.email': `"email" must be a valid email address`,
            'any.required': `"email" is a required field`,
        }),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,20}$'))
        .required()
        .messages({
            'string.base': `"password" should be a type of 'text'`,
            'string.empty': `"password" cannot be an empty field`,
            'string.pattern.base': `"password" must only contain alphanumeric characters and be between 6 and 20 characters long`,
            'any.required': `"password" is a required field`,
        })
});