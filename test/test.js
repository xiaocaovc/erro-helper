var ApiError = require('../index');
ApiError.NOT_REGISTER = "not register";
ApiError.set(ApiError.NOT_REGISTER,10,"位注册!");

var err = new ApiError(ApiError.NOT_REGISTER);
console.log(err.message);