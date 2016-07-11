//表格初始化
var tableObj = $('#tableList').DataTable({
  	"autoWidth":true,				//自动宽度
	"dom": 'frt<"tbb"lp>',			//分页和显示信息位置
  	//"processing": true,				//服务器处理
    //"serverSide": true,				//服务器处理
	"paging": false,
	"ordering": false,
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
    "columns":[
               { title:'<input type=\"checkbox\" id=\"checkAll\" />',name: 'name', data: 'name',render:function(data, type, row){
					return "<input type=\"checkbox\" name=\"checkList\" />";
					
               }},
               { title:'商品名称', name: 'name', data: 'name' },
               { title:'商品编号', name: 'position', data: 'position' },
               { title:'商品类别', name: 'salary', data: 'salary' }
 	],
     "drawCallback": function(settings){
        /*table按钮启用avalon*/
    	avalon.scan($("#content")[0], mv);
    	
    	/*checkbox全选*/
    	$("#checkAll").on("click", function () {
    		if ($(this).prop("checked") === true) {
    			$("input[name='checkList']").prop("checked", $(this).prop("checked"));
    			$('#tableList tbody tr').addClass('selected');
    		} else {
    			$("input[name='checkList']").prop("checked", false);
    			$('#tableList tbody tr').removeClass('selected');
    		}
    	});

    	/*点击行中的checkbox*/
    	$('#tableList tbody').on('click', 'tr input[name="checkList"]', function () {
    		var $tr = $(this).parents('tr');
    		$tr.toggleClass('selected');
    		var $tmp = $('[name=checkList]:checkbox');
    		$('#checkAll').prop('checked', $tmp.length == $tmp.filter(':checked').length);
    	});
     }
});



//avalon初始化
var mv = avalon.define({
	$id: "bodyController",
	closeDialog: function(){
		window.parent.layer.close(window.parent.chooseDialog);
	}
});
avalon.scan();