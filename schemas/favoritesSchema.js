import Joi from 'joi';

export default {
    checkIdBook:Joi.object({
        bookId:Joi.number().min(1).required(),
    }),
}