import Joi from 'joi';

// schema for your DTO
export const shortUrlSchema = Joi.object({
  url: Joi.string().uri().required()
});