const error_map = new Map();
/**
 * 自定义Api异常
 */
class ApiError extends Error{
	//构造方法
	/**
	 *
	 * @param errorNumber
	 */
	constructor(errorNumber){
		super();
		var error_info;
		if (errorNumber) {
			error_info = error_map.get(errorNumber);
		}
		
		//如果没有对应的错误信息，默认'未知错误'
		if (!error_info) {
			errorNumber = ApiError.UNKNOW_ERROR;
			error_info = error_map.get(errorNumber);
		}
		this.code = errorNumber;
		this.message = error_info.message;
	}
	
	/**
	 *
	 * @param errName
	 * @param number
	 * @param message
	 */
	static set(errorNumber,message){
		error_map.set(errorNumber, {message: message });
	}
}
ApiError.UNKNOW_ERROR = -1;
error_map.set(ApiError.UNKNOW_ERROR, {message: '未知错误' });
module.exports = ApiError;