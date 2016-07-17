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

//表格初始化(采购入库)
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
 	        { title:'出库单号', name: 'name', data: 'name' },
 	        { title:'出库类型', name: 'name', data: 'name' },
   			{ title:'商品名称', name: 'position', data: 'position' },
   			{ title:'商品编号', name: 'salary', data: 'salary' },
   			{ title:'商品类别', name: 'office', data: 'office' },
   			{ title:'库区', name: 'office', data: 'office' },
   			{ title:'规格', name: 'office', data: 'office' },
   			{ title:'出库数量', name: 'office', data: 'office' },
   			{ title:'经手人', name: 'office', data: 'office' },
   			{ title:'出库时间', name: 'office', data: 'office' }
   			
 	],
     "drawCallback": function(settings){
        /*table按钮启用avalon*/
    	avalon.scan($("#content")[0], mv);
     }
});


//avalon初始化
window.mv = avalon.define({
	$id: "bodyController",
	exportDetail: function(){
		alert("未完成");
	}
});
avalon.scan();