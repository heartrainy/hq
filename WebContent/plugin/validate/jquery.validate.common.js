jQuery.extend(jQuery.validator.messages, {
	required: "此处为必填项",
	remote: "Please fix this field.",
	email: "请输入有效的电子邮件地址.",
	url: "请输入有效的url地址.",
	date: "请输入有效的日期.",
	dateISO: "请输入有效的日期 (ISO).",
	number: "请输入有效的数字.",
	digits: "请输入整数.",
	creditcard: "Please enter a valid credit card number.",
	equalTo: "请输入相同的确认值.",
	accept: "Please enter a value with a valid extension.",
	maxlength: $.validator.format("请输入不超过 {0} 个字符."),
	minlength: $.validator.format("请输入至少 {0} 字符."),
	rangelength: $.validator.format("请输入介于 {0} 至 {1} 个长度的字符."),
	range: $.validator.format("请输入介于 {0} 至 {1} 的值."),
	max: $.validator.format("请输入小于等于 {0} 的值."),
	min: $.validator.format("请输入大于等于 {0} 的值."),
	/*以下新增*/
	isPhone: "请输入有效的手机号",
	isPassWord: "密码只能包含字母数字",
	selected:"必须选择一项",
	isQQ:"请输入有效的QQ号码",
	isFax:"请输入有效的传真号",
	isTel:"请输入有效的固定电话号码",
	isTel2:"请输入有效的固定电话号码",
	isZipCode:"请输入有效的邮编",
	isIDCard:"请输入有效的身份证号",
	isVehicleNo:"请输入有效的车牌号",
	isZZZ:"请输入正整数",
	isBigger:$.validator.format("请输入比{1}更大的值."),
	isMaxTwoDecimalPlaces:"最多只能填写两位小数！",
	leastOne:"{0}和{1}至少输入一项！",
	areaRequired:"请选择区!"
});

jQuery.extend(jQuery.validator.methods, {
	/*手机号码验证*/
	isPhone: function(value, element, param) {
		var reg = /^\s*(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}\s*$/;
		return this.optional(element) || reg.test(value);
	},
	/*密码验证*/
	isPassWord: function(value, element, param){
		var reg = /^[a-zA-Z0-9]{4,20}$/;
		return this.optional(element) || reg.test(value);
	},
	selected: function(value, element, param){
		return value != '请选择';
	},
	/*QQ验证*/
	isQQ: function(value, element, param){
		var reg = /^[1-9][0-9]{4,10}$/;
		return this.optional(element) || reg.test(value);
	},
	/*传真验证*/
	isFax: function(value, element, param){
		var reg = /^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8}))$/;
		return this.optional(element) || reg.test(value);
	},
	/*邮编验证*/
	isZipCode: function(value, element, param){
		var reg = /^[1-9][0-9]{5}$/;
		return this.optional(element) || reg.test(value);
	},
	/*固定电话验证*/
	isTel: function(value, element, param){
		var reg = /^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/;
		return this.optional(element) || reg.test(value);
	},
	/*固定电话验证(无区号)*/
	isTel2: function(value, element, param){
		var reg = /^((\d{7,8})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/;
		return this.optional(element) || reg.test(value);
	},
	/*身份证号码验证*/
	isIDCard: function(value, element, param){
		var reg = /^((\d{18})|(\d{15}))$/;
		return this.optional(element) || reg.test(value);
	},
	/*车牌号验证*/
	isVehicleNo: function(value, element, param){
		var reg = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/;
		return this.optional(element) || reg.test(value);
	},
	/*是否是正整数*/
	isZZZ: function(value, element, param){
		var reg = /^\+?[1-9][0-9]*$/;
		return reg.test(value);
	},
	/*是否更大的数*/
	isBigger: function(value, element, param){
		var target = $(param[0]).unbind(".validate-isBigger").bind("blur.validate-isBigger", function() {
			$(element).valid();
		});
		var fromN = parseFloat(value == "" ? "0" : value);
		var toN = parseFloat(target.val() == ""?"0" : target.val());
		return fromN >= toN;
	},
	/*最多两位小数*/
	isMaxTwoDecimalPlaces: function(value, element, param){
		if(value == null || value == "" || value == 0 ){
			return true;
		}
		var reg = /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/;
		return reg.test(value);
	},
	/*至少输入一项*/
	leastOne: function(value, element, param){
		var target1 = $(param[2]).unbind(".validate-leastOne").bind("blur.validate-leastOne", function() {
			$(element).valid();
		});
		var target2 = $(param[3]).unbind(".validate-leastOne").bind("blur.validate-leastOne", function() {
			$(element).valid();
		});
		return (target1.val() != "" | target2.val() != "");
	},
	/*是否是字母*/
	isAbc: function(value, element, param){
		var reg = /^(?!^[A-Za-z]+$)/;
		return reg.test(value);
	},
	/*是否是纯数字*/
	isNum: function(value, element, param){
		var reg = /^(?!^[0-9]+$)/;
		return reg.test(value);
	},
	/*是否是纯中文*/
	isChinese: function(value, element, param){
		var reg = /^(?!^[\u4E00-\u9FFF]+$)/;
		return reg.test(value);
	},
    /*用户名的验证*/
	isLoginName: function(value, element, param){
		var reg = /^([a-zA-Z0-9]|[\u4E00-\u9FA5]){4,20}$/;
		return reg.test(value);
	},
	/*保证金的验证*/
	isNumRange:function(value, element, param){
		var reg =/^[1-9]([0-9])?$/;
		return reg.test(value);
	},
	/*区选择判断*/
	areaRequired : function(value, element, param){
		var target1 = $(param[0]).unbind(".validate-leastOne").bind("blur.validate-leastOne", function() {
			$(element).valid();
		});
		var target2 = $(param[1]).unbind(".validate-leastOne").bind("blur.validate-leastOne", function() {
			$(element).valid();
		});
		
		if(target1.val() == '441900' | target1.val() == '442000' | target1.val() == '620200'){
			return true;
		}
		if(target2.val() == "请选择"){
			return null;
		}
		return target2.val();
	}
});