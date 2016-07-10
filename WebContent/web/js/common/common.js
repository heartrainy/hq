/**
 * 开启全局加载层
 */
function cldsLoading(){
	window.clds_loading = layer.load(2,{shade:[0.08,'#000']});
}

/**
 * 关闭全局加载层
 */
function cldsLoaded(){
	layer.close(window.clds_loading);
}

/**
 * 初始化下拉菜单
 * @param codes 枚举值,多个以逗号隔开
 * @returns {Array}
 */
function getEnumDropDownList(codes){
	var dropDownData = [];
	// 获取下拉列表值
	$.ajax({
		type: "post",
		url: window.baseUrl+'/client/commonBiz/getEnumDropDownList',
		data: {"code":codes},
		dataType: "json",
		async:false,
		success: function(res) {
			dropDownData = res.data;
		},
		error: function(err) {
			dropDownData = [];
		}
	});
	
	return dropDownData;
}

/**
 * 日期格式化
 * @param format
 * @returns
 */
Date.prototype.format = function(format) {  
    /* 
     * eg:format="yyyy-MM-dd hh:mm:ss"; 
     */  
    var o = {  
        "M+" : this.getMonth() + 1, // month  
        "d+" : this.getDate(), // day  
        "h+" : this.getHours(), // hour  
        "m+" : this.getMinutes(), // minute  
        "s+" : this.getSeconds(), // second  
        "q+" : Math.floor((this.getMonth() + 3) / 3), // quarter  
        "S" : this.getMilliseconds()  
        // millisecond  
    };  
  
    if (/(y+)/.test(format)) {  
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4  
                        - RegExp.$1.length));  
    }  
  
    for (var k in o) {  
        if (new RegExp("(" + k + ")").test(format)) {  
            format = format.replace(RegExp.$1, RegExp.$1.length == 1  
                            ? o[k]  
                            : ("00" + o[k]).substr(("" + o[k]).length));  
        }  
    }  
    return format;  
};

/**
 * 获取当前月的总天数
 * @param format
 * @returns
 */
Date.prototype.getCurMonthDays = function(date) {
	
}