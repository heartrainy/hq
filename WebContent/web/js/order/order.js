//时间控件初始化
$("#time1").datetimepicker({
	format: "yyyy-mm-dd",
    autoclose: true,
    minView: "month",
    maxView: "decade",
    language : 'zh-CN'
}).on("changeDate",function(ev){
    $("#time2").datetimepicker("setStartDate", $("#time1").val());
});
$("#time2").datetimepicker({
	format: "yyyy-mm-dd",
    autoclose: true,
    minView: "month",
    maxView: "decade",
    language : 'zh-CN'
}).on("changeDate", function (ev) {
    $("#time1").datetimepicker("setEndDate", $("#time2").val());
});
$("#time3").datetimepicker({
	format: "yyyy-mm-dd",
    autoclose: true,
    minView: "month",
    maxView: "decade",
    language : 'zh-CN'
}).on("changeDate",function(ev){
    $("#time4").datetimepicker("setStartDate", $("#time3").val());
});
$("#time4").datetimepicker({
	format: "yyyy-mm-dd",
    autoclose: true,
    minView: "month",
    maxView: "decade",
    language : 'zh-CN'
}).on("changeDate", function (ev) {
    $("#time3").datetimepicker("setEndDate", $("#time4").val());
});

//表格初始化
var tableObj = $('#tableList').DataTable({
  	"autoWidth":true,				//自动宽度
	"dom": 'frt<"tbb"ilp>',			//分页和显示信息位置
  	//"processing": true,				//服务器处理
    //"serverSide": true,				//服务器处理
    "stateSave": false,
    "searching":false,				//是否显示自带搜索功能
  	"oLanguage": {					//显示语言
  		sUrl: "../../../plugin/dataTables/Chinese.json"
  	},
  	"ajax":{						//ajax请求地址
//  		 "url" : baseUrl+'/client/cost/cfccs01f001',
//  		 "type" : "post",
//  		 "data": function ( req ) {
//  			 window.vmcontent.sendParams.draw = req.draw;
//  			 window.vmcontent.sendParams.start = req.start;
//  			 window.vmcontent.sendParams.pageCount = req.length;
//  			 return window.vmcontent.sendParams;
//  		 },
//		 "dataSrc": function( json ){
//			 json.recordsTotal = json.dataMaxCount;
//			 json.recordsFiltered = json.dataMaxCount;
//			 window.message = json.message;
//			 return json.data;
//		 }
  		"url" : '../../../plugin/dataTables/data/objects2.txt',
  		"dataSrc": 'data'
	},
  	"columnDefs": [{
        "searchable": false,
        "orderable": true,
        "targets": "_all"
    }],
    "columns":[
 	        { title:'订单编号', name: 'name', data: 'name' },
   			{ title:'婚宴日期', name: 'position', data: 'position' },
   			{ title:'婚宴低点', name: 'salary', data: 'salary' },
   			{ title:'婚宴桌数', name: 'office', data: 'office' },
   			{ title:'客户姓名', name: 'office', data: 'office' },
   			{ title:'进单渠道', name: 'office', data: 'office' },
   			{ title:'签订金额', name: 'office', data: 'office' },
   			{ title:'签订时间', name: 'office', data: 'office' },
   			{ title:'订单状态', name: 'office', data: 'office' },
	        { title:'操作', name: 'opration', data: null,"render": function ( data, type, row ) {
	        	return  "<a class='able-a' ms-click='changeDialog(\"viewOrder\")'>详情</a>"+
		    			"<a class='able-a' ms-click='openEdit'>编辑</a>"+
		    			"<a class='able-a' ms-click='openDelete'>删除</a>";
	        }}
 	],
     "drawCallback": function(settings){
        /*table按钮启用avalon*/
    	avalon.scan($("#content")[0], mv);
     }
});

//avalon初始化
window.mv = avalon.define({
	$id: "bodyController",
	showDialog: "main",
	changeDialog: function(t) {
		if(t == "addOrder") {
			$("#subFrame").attr("src", "addOrder.html");
		} else if(t == "viewOrder") {
			$("#subFrame").attr("src", "viewOrder.html");
		} else if(t == "viewArrangeOrder") {
			$("#subFrame").attr("src", "viewArrangeOrder.html");
		}
		
		if(t == "main") {
			mv.showDialog = "main";
		}else{
			mv.showDialog = "sub";
		}
	},
	importOrder: function(){
		alert("未完成");
	},
	openDelete: function(){
		layer.confirm('确定要删除该订单记录吗？', {
			title: '提示',
			skin: 'layui-layer-style2',
		    btn: ['确定','取消'] //按钮
		}, function(){
			clds_layer.msg("删除成功！", "info");
		});
	}
});
avalon.scan();