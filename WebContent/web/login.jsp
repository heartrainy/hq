<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>华迅达基础业务系统</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link type="image/x-icon" href="${pageContext.request.contextPath}/web/img/hbs/favicon.ico" rel="icon">
	<link type="image/x-icon" href="${pageContext.request.contextPath}/web/img/hbs/favicon.ico" rel="shortcut icon">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/web/css/login.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/plugin/font-awesome/css/font-awesome.css" />
    <style type="text/css">
        input{
            font-family: "Microsoft Yahei";
        }
        .control-label{
            color: #B2DFEE;
            padding-left: 4px;
        }
    </style>
</head>
<body onkeydown="keydown(event)">
	<input type="hidden" id="base_url" value="${pageContext.request.contextPath}" />
    <div class="content">
    	<div class="top">
    		<div class="top-logo"></div>
    	</div>
    	<div class="center">
    		<div class="center-content">
    			<div class="center-name">
    				<input class="login" name="username" type="text" placeholder="用户名" />
    			</div>
    			<div class="center-pass">
    				<input class="login" name="password" type="password" placeholder="密码" />
    			</div>
    			<div class="loginBtn" align="center" onclick="checkLogin();">登    录</div>
    		</div>
    	</div>
    	<div class="bottom">
    		<div class="bottom-content">
    			<p class="p-title">为保障您的账号安全</p>
    			<p class="p-content">1、请不要在公共的电脑上保存登录信息，请尽量避免多人使用同一账号，<br/>退出时请点击右上方的注销按钮以安全退出系统</p>
    			<p class="p-content">2、推荐使用Internet Explorer7、8、9、10，火狐FIREFOX，谷歌Chrome<br />等浏览器来访问本系统</p>
    		</div>
    	</div>
    </div>
    
    <script src="${pageContext.request.contextPath}/plugin/jquery/jquery-1.8.2.min.js"></script>
    <script src="${pageContext.request.contextPath}/plugin/layer/layer.js"></script>
    <script src="${pageContext.request.contextPath}/web/js/common/clds.layer.js"></script>
    <script src="${pageContext.request.contextPath}/web/js/common/login.js"></script> 
</body>

</html>
