import joi from 'joi';
import { semver } from 'joi-extension-semver';
const Joi = joi.extend(semver)

const deploymentsValidator = Joi.object({
  templateName: Joi.string().required(),
  url: Joi.string().required(),
  version: Joi.semver().valid().required()
})


export  { deploymentsValidator }
