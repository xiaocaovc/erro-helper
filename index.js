const error_map = new Map();
/**
 * 自定义Api异常
 */
class ApiError extends Error{
	//构造方法
	constructor(error_name){
		super();
		var error_info;
		if (error_name) {
			error_info = error_map.get(error_name);
		}
		
		//如果没有对应的错误信息，默认'未知错误'
		if (!error_info) {
			error_name = ApiError.UNKNOW_ERROR;
			error_info = error_map.get(error_name);
		}
		
		this.name = error_name;
		this.number = error_info.number;
		this.message = error_info.message;
	}
	static set(errName,number,message){
		error_map.set(errName, { number: number, message: message });
	}
}
ApiError.UNKNOW_ERROR = "unknownError";
error_map.set(ApiError.UNKNOW_ERROR, { number: -1, message: '未知错误' });
module.exports = ApiError;