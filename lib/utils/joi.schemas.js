const Joi = require('joi');

//Auth validations

module.exports.addCategory = Joi.object({
  category_name: Joi.string().required(),
  description: Joi.string().allow('').optional(),
});

module.exports.updateCategory = Joi.object({
  category_name: Joi.string().required(),
  description: Joi.string().allow('').optional(),
    id: Joi.required(),
});

module.exports.changeStatus = Joi.object({
  active_status: Joi.string()
    .valid('active', 'inactive')
    .required(),
  id: Joi.required(),
});

module.exports.addServies = Joi.object({
  service_name: Joi.string().required(),
  category_id: Joi.number().required(),
  description: Joi.string().allow('').optional(),
  mrp: Joi.number().positive().precision(2).allow(0).default(0),
  type: Joi.string()
    .valid('normal', 'vip')
    .required(),
 
});



module.exports.addUser = Joi.object({
  name: Joi.string().required(),
  password: Joi.optional(),
  phone: Joi.string().required(),
  email: Joi.string().required().email(),
  role: Joi.string(),
  active_status: Joi.string()
    .valid('active', 'inactive', 'deleted', 'hidden')
    .required(),
});

module.exports.updateUser = Joi.object({
 name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().required().email(),
  dob: Joi.date().optional(),
  gender: Joi.string().optional(),
  active_status: Joi.string()
    .valid('active', 'inactive', 'deleted', 'hidden')
    .required(),
  id: Joi.required(),
});


module.exports.signUp = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
  user_name: Joi.string().required(),
  photo_url: Joi.string(),
  bio: Joi.string(),
  first_name: Joi.string(),
  last_name: Joi.string(),
  phone: Joi.string(),
  width: Joi.when('photo_url', {
    is: Joi.exist(),
    then: Joi.string().required(),
    otherwise: Joi.optional(),
  }),
  height: Joi.when('photo_url', {
    is: Joi.exist(),
    then: Joi.string().required(),
    otherwise: Joi.optional(),
  })
});

module.exports.signUser = Joi.object({
  email: Joi.string().email().required().messages({
    'string.base': 'Email is invalid',
    'string.empty': 'Email cannot be an empty',
    'any.required': 'Email is required',
  }),
  password: Joi.string().required(),
});


module.exports.verifyCode = Joi.object({
  code: Joi.string().required(),
});



