var ApiError = require('../index');
ApiError.NOT_REGISTER = 10;
ApiError.set(ApiError.NOT_REGISTER,"位注册!");

var err = new ApiError(ApiError.NOT_REGISTER);
console.log(err.message);