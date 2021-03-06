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
 	        { title:'库区名称', name: 'name', data: 'name' },
   			{ title:'商品种类', name: 'position', data: 'position' },
   			{ title:'创建时间', name: 'salary', data: 'salary' },
	        { title:'操作', name: 'opration', data: null, width: "100", "render": function ( data, type, row ) {
	        	return  "<a class='able-a' ms-click='openEdit'>编辑</a>"+
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
	openAddDialog: function(){
		window.addDialog = layer.open({
			title: '新建库区',
		    type: 2,
		    skin: 'layui-layer-style2', //样式类名
		    area: ['360px','200px'], //宽高
		    content: 'addWarehouseArea.html'
		});
	},
	openEdit: function(){
		window.editDialog = layer.open({
			title: '编辑库区',
		    type: 2,
		    skin: 'layui-layer-style2', //样式类名
		    area: ['360px','200px'], //宽高
		    content: 'editWarehouseArea.html'
		});
	},
	openDelete: function(){
		layer.confirm('确定要删除该库区吗？', {
			title: '提示',
			skin: 'layui-layer-style2',
		    btn: ['确定','取消'] //按钮
		}, function(){
			clds_layer.msg("删除成功！", "info");
		});
	}
});
avalon.scan();