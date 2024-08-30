const Joi = require("@hapi/joi");

const ValidateUser = (data) => {
  const schemaValidation = Joi.object({
    id_user: Joi.number().integer().positive().optional(),
    username: Joi.string().alphanum().min(3).max(30).required().messages({
      "string.alphanum": "Username hanya boleh berisi huruf dan angka.",
      "string.min": "Username harus memiliki minimal 3 karakter.",
      "string.max": "Username tidak boleh lebih dari 30 karakter.",
      "any.required": "Username wajib diisi.",
    }),
    password: Joi.string().min(5).max(50).required().pattern(new RegExp("^(?=.*\\d)[A-Za-z\\d]{5,}$")).messages({
      "string.min": "Password harus memiliki minimal 5 karakter.",
      "string.max": "Password tidak boleh lebih dari 50 karakter.",
      "string.pattern.base": "Password harus mengandung setidaknya satu angka.",
      "any.required": "Password wajib diisi.",
    }),
    email: Joi.string().email().required().messages({
      "string.email": "Format email tidak valid.",
      "any.required": "Email wajib diisi.",
    }),
  });

  return schemaValidation.validate(data);
};

module.exports = ValidateUser;
