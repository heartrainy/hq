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
   			{ title:'客户姓名', name: 'salary', data: 'salary' },
   			{ title:'进单渠道', name: 'office', data: 'office' },
   			{ title:'签订时间', name: 'office', data: 'office' },
   			{ title:'签订金额', name: 'office', data: 'office' },
   			{ title:'实收金额', name: 'office', data: 'office' },
   			{ title:'收款状态', name: 'office', data: 'office' },
	        { title:'操作', name: 'opration', data: null,"render": function ( data, type, row ) {
	        	return  "<a class='able-a' ms-click='openDetail'>记录明细</a>"+
		    			"<a class='able-a' ms-click='openReceipt'>收款</a>";
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
	openDetail: function(){
		window.viewDialog = layer.open({
			title: '记录明细',
		    type: 2,
		    skin: 'layui-layer-style2', //样式类名
		    area: ['840px','580px'], //宽高
		    content: 'detailReceipt.html'
		});
	},
	openReceipt: function(){
		window.receiptDialog = layer.open({
			title: '收款',
		    type: 2,
		    skin: 'layui-layer-style2', //样式类名
		    area: ['840px','420px'], //宽高
		    content: 'doReceipt.html'
		});
	}
});
avalon.scan();