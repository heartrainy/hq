<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>后台管理模板</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="stylesheet" href="${pageContext.request.contextPath}/plugin/bootstrap/bootstrap-2.3.0.min.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/web/css/matrix-login.css" />
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
<body onkeydown="keydown()">
	<input type="hidden" id="base_url" value="${pageContext.request.contextPath}" />
    <div id="loginbox">  
        <div class="control-group normal_text"> 
            <h2 style="color:#B2DFEE;font-size:28px;">信息管理系统平台</h2>
            <span style="font-size:14px;color:gray;">版权所有 &copy; iProg网络科技有限公司 2015-2018</span>
        </div>          
        <form id="loginform" class="form-vertical" action="http://themedesigner.in/demo/matrix-admin/index.html">
            <div class="control-group">
                <label class="control-label">登陆账号</label>
                <div class="controls">
                    <div class="main_input_box">
                        <span class="add-on bg_lg"><i class="icon-user" style="font-size:16px;"></i></span><input type="text" name="username" />
                    </div>
                </div>
            </div>
            <div class="control-group2">
                <label class="control-label">登陆密码</label>
                <div class="controls">
                    <div class="main_input_box">
                        <span class="add-on bg_ly"><i class="icon-lock" style="font-size:16px;"></i></span><input type="password" name="password" />
                    </div>
                </div>
            </div>
            <div class="form-actions">
                <span class="pull-left"><a href="#" class="flip-link btn btn-info" id="to-recover">忘记密码？</a></span>
                <span class="pull-right"><input type="button" id="checkBtn" onclick="checkLogin()" class="btn btn-success" style="width:335px;" value="登&nbsp;&nbsp;&nbsp;&nbsp;录"/></span>
            </div>
            <div class="control-group normal_text">
                <div style="font-size:14px;color:gray;">推荐使用webkit内核浏览器，如chrome等</div>
            </div>
        </form>
        

        <form id="recoverform" action="#" class="form-vertical" style="padding-top:10px;">
            <label class="control-label">登陆账号</label>
            <div class="controls">
                <div class="main_input_box">
                    <span class="add-on bg_lg"><i class="icon-user" style="font-size:16px;"></i></span><input type="text" name="re_username" />
                </div>
            </div>
            <div class="control-group">
                <label class="control-label">新密码</label>
                <div class="controls">
                    <div class="main_input_box">
                        <span class="add-on bg_ly"><i class="icon-lock" style="font-size:16px;"></i></span><input type="password" name="re_password"/>
                    </div>
                </div>
            </div>
            <div class="control-group" style="padding-top:0px;">
                <label class="control-label">确认新密码</label>
                <div class="controls">
                    <div class="main_input_box">
                        <span class="add-on bg_ly"><i class="icon-lock" style="font-size:16px;"></i></span><input type="password" name="re_confirmpassword" />
                    </div>
                </div>
            </div>
            <div class="form-actions">
                <span class="pull-left"><a href="#" class="flip-link btn btn-success" id="to-login">&laquo; 返回登录</a></span>
                <span class="pull-right"><a id="changePwd" class="btn btn-info" style="width:310px;">重置密码</a></span>
            </div>
            <div class="control-group normal_text">
                <div style="font-size:14px;color:gray;">推荐使用webkit内核浏览器，如chrome等</div>
            </div>
        </form>
        
        <div id="myModal" class="modal hide">
           <div class="modal-header">
             <button id="modelClose" data-dismiss="modal" class="close" type="button">×</button>
             <h3>登录信息</h3>
           </div>
           <div class="modal-body">
             <p>返回提示…</p>
           </div>
         </div>

    </div>
    
    <script src="${pageContext.request.contextPath}/plugin/jquery/jquery-1.8.2.min.js"></script>
    <script src="${pageContext.request.contextPath}/web/js/common/matrix.login.js"></script> 
</body>

</html>
