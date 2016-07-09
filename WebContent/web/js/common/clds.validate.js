(function($, layer){
	
	/*正则校验*/
	var clds_reg = {
		required: function(value){
			return $.trim(value)!="";
		},
		/*电话号码验证*/
		isPhone: function(value, element, param) {
			var reg = /^\s*(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}\s*$/;
			return reg.test(value) || this.optional(value);
		},
		/*是否为数字*/
		isNum: function(value, element, param) {
			return !isNaN($.trim(value)) || this.optional(value);
		},
		/*数字范围 包含*/
		numLimit: function(value, element, param){
			var min = param[0];
			var max = param[1];
			var numVal = parseFloat(value)
			var flag = false;
			if(numVal >= min && numVal <= max){
				flag = true;
			}
			return flag || this.optional(value);
		},
		/*是否是正整数*/
		isZZZ: function(value, element, param){
			var reg = /^\+?[1-9][0-9]*$/;
			return reg.test(value) || this.optional(value);
		},
		isTel: function(value, element, param){
			var reg = /^[0-9]{7,8}(-\d{3}){0,1}$/;
			return reg.test(value) || this.optional(value);
		},
		//-----------------------------------以下不需要改动
		/*非空不验证*/
		optional: function(value){
			return !clds_reg.required(value);
		}
	}
	
	/*默认验证消息*/
	var clds_messages = {
		required: "此项不能为空",
		isPhone: "请输入正确的电话号码",
		isNum:"请输入数字",
		numLimit:"请输入数字范围内的值",
		isZZZ:"请输入正整数",
		isTel:"请输入正确的固定电话"
	}
	
	
	//---------------------------------------------------------------------------------------------
	
	
	/*所有方法*/
	var methods = {
		valid: function(_this){
			var pass = true;
			
			var options = _this.data("options");
			var rules = options.rules;
			/*初始化显示位置*/
			for(var i=0; i<rules.length; i++){
				var classDom = _this.find("."+className);
				classDom.each(function(j){
					var showDom = rules[i].showDom == undefined? $(this) : rules[i].showDom($(this));
					showDom.removeData("layerId");
				});
			}
			/*验证*/
			for(var i=0; i<rules.length; i++){
				var className = rules[i].className;
				var validNames = rules[i].validNames;
				var messages = rules[i].messages == undefined?"":rules[i].messages;
				var messagesNum = rules[i].messagesNum == undefined?"":rules[i].messagesNum;
				var position = rules[i].position == undefined?"right":rules[i].position;
				var posNum = 2;
				if(position == "top"){
					posNum = 1;
				}else if(position == "right"){
					posNum = 2;
				}else if(position == "bottom"){
					posNum = 3;
				}else if(position == "left"){
					posNum = 4;
				}
				
				
				var classDom = _this.find("."+className);
				classDom.each(function(j){
					var eachDom = $(this);
					/*获取值*/
					var val = $(this).val();
					/*显示位置*/
					var showDom = rules[i].showDom == undefined? $(this) : rules[i].showDom($(this));
					/*2者只需一个必填Dom*/
					var otherRequiredDom = rules[i].otherRequiredDom == undefined? "" : rules[i].otherRequiredDom($(this));
					
					/*验证*/
					var validFlag = true;
					var message = "";
					var messageNum = "";
					for(var vn in validNames){
						/*至少一个必填校验*/
						if(otherRequiredDom != ""){
							var regValid1 = clds_reg.required(val);
							var regValid2 = clds_reg.required(otherRequiredDom.val());
							if(!(regValid1 || regValid2)){
								validFlag = false;
								if(messages == ""){
									message = clds_messages["required"]
								}else{
									message = messages["required"] == undefined? clds_messages["required"] : messages["required"];
								}
								break;
							}
						}
						
						if(typeof validNames[vn] === "boolean"){
							if(validNames[vn]){
								var regValid = clds_reg[vn](val, eachDom);
								if(!regValid){
									validFlag = false;
									if(messages == ""){
										message = clds_messages[vn]
									}else{
										if(messagesNum != ""){
											messageNum = messagesNum[vn](eachDom);
											message = messages[vn][messageNum];
										}else{
											message = messages[vn] == undefined? clds_messages[vn] : messages[vn];
										}
									}
									break;
								}
							}
						}else if(typeof validNames[vn] === "object"){
							var regValid = clds_reg[vn](val, eachDom, validNames[vn]);
							if(!regValid){
								validFlag = false;
								if(messages == ""){
									message = clds_messages[vn]
								}else{
									message = messages[vn] == undefined? clds_messages[vn] : messages[vn];
								}
								break;
							}
						}
						
					}
					
					/*验证不通过显示*/
					if(!validFlag){
						var existId = eachDom.data("layerId");
						/*判断指定显示位置是否已有显示*/
						var showDomExistId = showDom.data("layerId");
						if(existId){
							layer.close(existId);
							eachDom.removeData("layerId");
							showDom.removeData("layerId");
							showDomExistId = undefined;
						}
						if(showDomExistId==undefined){
							var layerId = layer.tips(message, showDom, {
								tips: [posNum, "#F00000"],
								tipsMore: true,
								time: 2000
							});
							showDom.data("layerId", layerId);
							eachDom.data("layerId", layerId);
							eachDom.unbind("keyup");
							eachDom.bind("keyup",function(){
								var index = $(this).data("layerId");
								layer.close(index);
								eachDom.removeData("layerId");
								showDom.removeData("layerId");
							});
							pass = false;
						}
					}
				});
			}
			return pass;
		}	
	}
	
	$.fn.cldsValid = function(options){
		var $this = $(this);
		if(typeof options === 'string'){
			var method = methods[options];
			if (method){
				return method($this);
			}
		}else if(typeof options === 'object'){
			/*存储验证options*/
			$this.data("options", options);
		}
	}	
	
})($, layer);