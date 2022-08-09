import Joi from 'joi-browser';

// To Validate Individual Form Elements
export const validateProperty = (input, schemaCheck) => {
  const obj = { [input.name]: input.value };
  const schemaType = { [input.name]: schemaCheck[input.name] };
  const { error } = Joi.validate(obj, schemaType);
  return error ? error.details[0].message : null;
};

// To Validate Entire Form
export const validate = (data, schemaCheck) => {
  const options = { abortEarly: false };
  const { error } = Joi.validate(data, schemaCheck, options);

  if (!error) return null;

  const errors = {};

  for (let item of error.details) errors[item.path[0]] = item.message;
  return errors;
};
