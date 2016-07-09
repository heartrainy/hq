<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <%
String path = request.getContextPath();  
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<base href="<%=basePath %>">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Expires" content="0">

<!-- jquery -->
<script type="text/javascript" src="plugin/jquery/jquery-1.8.2.min.js"></script>

  <title>file</title>
  
  <link rel="stylesheet" type="text/css" href="plugin/uploadify/uploadify.css"></link>
  <link rel="stylesheet" href="${pageContext.request.contextPath}/plugin/bootstrap/bootstrap-2.3.0.min.css" />
  <link rel="stylesheet" href="${pageContext.request.contextPath}/web/css/matrix-style2.css" />
  <script type="text/javascript" src="plugin/uploadify/jquery.uploadify.min.js"></script>
  
<script type="text/javascript">
//上传组件初始化
$(function(){
	$("#uploadify").uploadify({
		'auto' : true,						//选择文件后是否自动上传
		'swf' : '${pageContext.request.contextPath}/plugin/uploadify/uploadify.swf',		   //固定上传文件
		'uploader' : '${pageContext.request.contextPath}/client/file/upload?basePath=/cost/aa',//后台处理的请求    /cost/aa为上传文件路径
		'queueID' : 'fileQueue',		//指定上传百分比显示div的id
		//'queueSizeLimit' : 3,			//限制同时上传个数
		'fileSizeLimit' : '50MB',		//限制上传文件大小
		'fileTypeDesc' : 'Image Files',
		'fileTypeExts' : '*.gif; *.png; *.jpg', //控制可上传文件的扩展名
		'multi' : false,				//是否允许同时上传多个文件
		'buttonClass' : 'btn btn-upload',	//上传按钮div的class名
		'buttonImage' : '',				//上传按钮背景图片
		'buttonText' : '上传按钮',			//上传按钮文字
		'width' : 80,					//上传按钮宽度
		'height' : 25,					//上传按钮高度
		//'overrideEvents' : ['onUploadProgress'],    	//跳过指定事件
		'onDialogOpen'  : function() {
        },
		'onDialogClose'  : function(queueData) {
		},
		'onSelectError' : function(file, errorCode, errorMsg) {
		},
		'onQueueComplete' : function(queueData) {
		},
		//上传中
		'onUploadProgress' : function(file, bytesUploaded, bytesTotal, totalBytesUploaded, totalBytesTotal) {
			$("#upload-show").attr("src","${pageContext.request.contextPath}/web/img/hbs/upload_loading.gif");
        	$("#uploadify").uploadify('disable',true);
		},
		//上传成功
		'onUploadSuccess' : function(file, data, response) {
			var jsonData = $.parseJSON(data);
			var imageId = jsonData.data.c_id;
			$("#upload-show").attr("src","${pageContext.request.contextPath}/client/file/showImage?imageId="+imageId);
            $("#uploadify").uploadify('disable',false);
		},
		//上传失败
		'onUploadError' : function(file, errorCode, errorMsg, errorString) {
			$("#upload-show").attr("src","img/no-img.png");
        	$("#uploadify").uploadify('disable',false);
		},
		'onUploadComplete' : function(file) {
		},
		'onInit'   : function(instance) {
		}
	});
});
</script>
</head>
	<body>
		<div style="margin-left: 4px; width: 90px; margin-top: 4px; height: 25px;">
			<input type="file" name="uploadify" id="uploadify" style="float: left;" />
		</div>
		<!-- <div id="fileQueue"></div> -->
		
		<div style="position: absolute; left: 100px; top: 4px;">
			<img id="upload-show" src="${pageContext.request.contextPath}/web/img/hbs/upload_default.png" style="width:72px; height: 72px;" />
		</div>
	</body>
</html>
