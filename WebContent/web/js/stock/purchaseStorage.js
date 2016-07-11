//表格初始化
var tableObj = $('#tableList').DataTable({
  	"autoWidth":true,				//自动宽度
	"dom": 'frt<"tbb"lp>',			//分页和显示信息位置
  	//"processing": true,				//服务器处理
    //"serverSide": true,				//服务器处理
	"paging": false,
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
  		"url" : '../../../plugin/dataTables/data/objects1.txt',
  		"dataSrc": 'data'
	},
  	"columnDefs": [{
        "searchable": false,
        "orderable": true,
        "targets": "_all"
    }],
    "columns":[
 	        { title:'商品名称', name: 'name', data: 'name' },
   			{ title:'商品编号', name: 'position', data: 'position' },
   			{ title:'商品类别', name: 'salary', data: 'salary' },
   			{ title:'库区', name: 'office', data: 'office' },
   			{ title:'规格', name: 'office', data: 'office' },
   			{ title:'入库数量', name: 'office', data: 'office' },
   			{ title:'成本单价', name: 'office', data: 'office' },
   			{ title:'总平均成本单价', name: 'office', data: 'office' },
	        { title:'操作', name: 'opration', data: null,"render": function ( data, type, row ) {
	        	return  "<a class='able-a' ms-click='openDelete'>删除</a>";
	        }}
 	],
     "drawCallback": function(settings){
        /*table按钮启用avalon*/
    	avalon.scan($("#content")[0], mv);
     }
});

//avalon初始化
var mv = avalon.define({
	$id: "bodyController",
	openChooseProject: function(){
		window.chooseDialog = layer.open({
			title: '选择商品',
		    type: 2,
		    skin: 'layui-layer-style2', //样式类名
		    area: ['560px','580px'], //宽高
		    content: 'chooseProduct.html'
		});
	},
	returnBack: function(){
		window.parent.mv.changeDialog("main");
	}
});
avalon.scan();