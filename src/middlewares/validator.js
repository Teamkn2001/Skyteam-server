const Joi = require("joi");
const createError = require("../utils/create-error");

const validateUserForm = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    "string.pattern.base":
      "Username can only contain letters, numbers and underscores",
    "string.min": " user must be at least 3 characters long",
    "any.required": "username is required",
  }),
  email: Joi.string().email({ tlds: false }).required().messages({
    "string.email": "Invalid email",
    "any.required": "email is required",
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .messages({
      "string.pattern.base": "Invalid phone number",
    }),
  lineId: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/)
    .messages({
      "string.pattern.base": "Invalid Line ID",
    }),
  bookingDate: Joi.date()
    .min("now")
    .max(new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)) // max 10 days ahead
    .required()
    .messages({
      "date.base": "Invalid date",
      "date.min": "Cannot book in the past",
      "date.max": "Cannot book more than 10 days in advance",
      "any.required": "Date is required",
    }),
    message: Joi.alternatives().try(
      Joi.string().max(100),
      Joi.object(),
      Joi.allow(null)
    ).messages({
      "string.max": "Message cannot be longer than 100 characters"
    })
});

const validateUserFormSchema = (schema) => (req, res, next) => {
  const { formData } = req.body;
  
  const { value, error } = schema.validate(formData, {
    abortEarly: true,
    stripUnknown: true,
  });

  if (error) {
    const errMsg = error.details[0].message;
    const err = createError(400, errMsg);
    console.log("first");
    return next(err);
  }
  req.input = value;
  next();
};

exports.validateUserForm = validateUserFormSchema(validateUserForm);
