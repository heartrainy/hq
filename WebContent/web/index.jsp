<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>华迅达基础业务系统</title>
    <%@ include file="main/common-meta.jsp" %>
    <link type="image/x-icon" href="${pageContext.request.contextPath}/web/img/hbs/favicon.ico" rel="icon">
	<link type="image/x-icon" href="${pageContext.request.contextPath}/web/img/hbs/favicon.ico" rel="shortcut icon">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/plugin/bootstrap/bootstrap-2.3.0.min.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/plugin/font-awesome/css/font-awesome.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/web/css/matrix-style.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/web/css/matrix-media.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/web/css/theme/red.css" />
</head>
<body ms-controller="index">
	<input type="hidden" id="base_url" value="${pageContext.request.contextPath}" />
	
    <!--Header-part-->
    <div id="header">
      <h1>婚庆公司业务管理平台</h1>
    </div>
    <!--close-Header-part--> 

    <!--top-Header-menu-->
    <div id="user-nav" class="navbar navbar-inverse">
        <ul class="nav">
            <li  class="dropdown" id="profile-messages" >
                <a title="" href="#" data-toggle="dropdown" data-target="#profile-messages" class="dropdown-toggle">
                    <i class="icon icon-user"></i>&nbsp;
                    <span class="text">欢迎你，{{personName}}</span>&nbsp;
                    <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                    <li><a class="menu_a" link="${pageContext.request.contextPath}/client/static/gotoJsp?path=/web/sub/party/UMPI01.jsp" stitle="个人账户信息"><i class="icon-user" ></i> 个人资料</a></li>
                    <li class="divider"></li>
                    <!-- 
                    <li><a href="#"><i class="icon-check"></i> 我的任务</a></li>
                    <li class="divider"></li>
                     -->
                    <li><a href="${pageContext.request.contextPath}/client/party/logout"><i class="icon-key"></i> 退出系统</a></li>
                </ul>
            </li>
            <!-- 
            <li class="dropdown" id="menu-messages">
                <a href="#" data-toggle="dropdown" data-target="#menu-messages" class="dropdown-toggle">
                    <i class="icon icon-envelope"></i>&nbsp;
                    <span class="text">我的消息</span>&nbsp;
                    <span class="label label-important">4</span>&nbsp; 
                    <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                    <li><a class="sAdd" title="" href="#"><i class="icon-plus"></i> 新消息</a></li>
                    <li class="divider"></li>
                    <li><a class="sInbox" title="" href="#"><i class="icon-envelope"></i> 收件箱</a></li>
                    <li class="divider"></li>
                    <li><a class="sOutbox" title="" href="#"><i class="icon-arrow-up"></i> 发件箱</a></li>
                    <li class="divider"></li>
                    <li><a class="sTrash" title="" href="#"><i class="icon-trash"></i> 回收站</a></li>
                </ul>
            </li>
            <li class=""><a title="" href="#"><i class="icon icon-cog"></i> <span class="text">&nbsp;设置</span></a></li>
             -->
            <li class=""><a title="" href="${pageContext.request.contextPath}/client/party/logout"><i class="icon icon-share-alt"></i> <span class="text">&nbsp;退出系统</span></a></li>
        </ul>
    </div>
    <!--close-top-Header-menu-->

    <!--start-top-serch-->
    <!-- <div id="search">
        <input type="text" placeholder="搜索..."/>
        <button type="submit" class="tip-bottom" title="Search"><i class="icon-search icon-white"></i></button>
    </div> -->
    <!--close-top-serch-->

    <!--sidebar-menu-->
    <div id="sidebar-out">
	    <div id="sidebar">
	    	<ul>
	        <!-- <ul ms-with="treeList"> -->
	        
	        	<!-- 不包含二级菜单 -->
	        	<%-- <li ms-if-loop="el.authRes != null" class="submenu">
	                <a class="menu_a" ms-attr-link="${pageContext.request.contextPath}{{el.authRes.authResAddr}}" ms-attr-stitle="{{el.authRes.authResName}}" ms-attr-tid="{{el.auth.authCode}}"><i class="icon"></i> <span>{{el.authRes.authResName}}</span></a> 
	            </li> --%>
	        	
	        	<!-- 包含二级菜单 -->
	        	<%-- <li ms-if-loop="el.authRes == null" class="submenu">
	        		<a href="#">
	                    <i class="icon"></i> 
	                    <span>{{el.auth.authName}}</span> 
	                </a>
	                <ul>
	                    <li ms-repeat-ell="el.child"><a class="menu_a" ms-attr-link="${pageContext.request.contextPath}{{ell.authRes.authResAddr}}" ms-attr-stitle="{{ell.auth.authName}}" ms-attr-tid="{{ell.auth.authCode}}"><i class="icon icon-caret-right"></i>{{ell.auth.authName}}</a></li>
	                </ul>
	        	</li> --%>
	        	
	            <%-- 
	            <li class="submenu active">
	                <a class="menu_a" link="${pageContext.request.contextPath}/web/home.jsp" stitle="首页"><i class="icon icon-home"></i> <span>主页</span></a> 
	            </li>
	            --%>
	            <li class="submenu"> 
	                <a href="#">
	                    <i class="icon icon-table"></i> 
	                    <span>订单管理</span> 
	                    <!-- <span class="label label-info">3</span> -->
	                </a>
	                <ul>
	                    <li><a class="menu_a" link="${pageContext.request.contextPath}/client/static/gotoJsp?path=/web/sub/party/UMOM01.jsp" stitle="客户管理" tid="1"><i class="icon icon-caret-right"></i>客户管理</a></li>
	                    <li><a class="menu_a" link="${pageContext.request.contextPath}/client/static/gotoJsp?path=/web/sub/party/UMAM01.jsp" stitle="订单信息" tid="2"><i class="icon icon-caret-right"></i>订单信息</a></li>
	                    <li><a class="menu_a" link="${pageContext.request.contextPath}/client/static/gotoJsp?path=/web/sub/party/UMPI01.jsp" stitle="收款结算" tid="3"><i class="icon icon-caret-right"></i>收款结算</a></li>
	                </ul>
	            </li>
	            <li class="submenu"> 
	                <a href="#">
	                    <i class="icon icon-table"></i> 
	                    <span>基础信息</span> 
	                    <!-- <span class="label label-info">3</span> -->
	                </a>
	                <ul>
	                    <li><a class="menu_a" link="${pageContext.request.contextPath}/client/static/gotoJsp?path=/web/sub/party/UMOM01.jsp" stitle="商品管理" tid="4"><i class="icon icon-caret-right"></i>商品管理</a></li>
	                    <li><a class="menu_a" link="${pageContext.request.contextPath}/client/static/gotoJsp?path=/web/sub/party/UMAM01.jsp" stitle="库区管理" tid="5"><i class="icon icon-caret-right"></i>库区管理</a></li>
	                </ul>
	            </li>
	            <li class="submenu">
					<a href="#">
	                    <i class="icon icon-th"></i> 
	                    <span>库存管理</span> 
	                    <!-- <span class="label label-info">6</span> -->
	                </a>
					<ul>
	                    <li><a class="menu_a" link="${pageContext.request.contextPath}/client/static/gotoJsp?path=/web/sub/party/CMMC01.jsp" stitle="入库管理" tid="6"><i class="icon icon-caret-right"></i>入库管理</a></li>
	                    <li><a class="menu_a" link="${pageContext.request.contextPath}/client/static/gotoJsp?path=/web/sub/party/CMCC01.jsp" stitle="入库明细" tid="7"><i class="icon icon-caret-right"></i>入库明细</a></li>
	                    <li><a class="menu_a" link="${pageContext.request.contextPath}/client/static/gotoJsp?path=/web/sub/party/CMCU01.jsp" stitle="出库管理" tid="8"><i class="icon icon-caret-right"></i>出库管理</a></li>
	                    <li><a class="menu_a" link="${pageContext.request.contextPath}/client/static/gotoJsp?path=/web/sub/party/CMCCA01.jsp" stitle="出库明细" tid="9"><i class="icon icon-caret-right"></i>出库明细</a></li>
						<li><a class="menu_a" link="${pageContext.request.contextPath}/client/static/gotoJsp?path=/web/sub/party/CMCL01.jsp" stitle="库存查询" tid="10"><i class="icon icon-caret-right"></i>库存查询</a></li>
	                </ul>
	            </li>
	        </ul>
	    </div>
    </div>
    <!--sidebar-menu-->
	<div class="dislpayArrow">
		<a class="pngfix"></a>
	</div>

    <!--main-container-part-->
    <div id="content">
        <!--breadcrumbs-->
        <!-- <div id="content-header">
          <div id="breadcrumb">
          	<a href="home.html" title="Go to Home"><i class="icon-home"></i>主页</a>
          </div>
        </div> -->
        <!--End-breadcrumbs-->
        
        <div id="content-tab">
        	<div id="tab-body">
        		<div id="tab-top">
        			<div id="tab-left">
						<ul id="tab-ul">
	        				<li class="tab-li tab-li-select" t="0" tid="AUTH001">首页</li>
	        			</ul>
        			</div>
        			<div id="tab-right">
        				<a id="tab-prev">
        					<i class="icon-chevron-left"></i>
        				</a>
        				<a id="tab-next">
        					<i class="icon-chevron-right"></i>
        				</a>
        			</div>
        			<!-- <div class="tab-li" t="1">订单管理1<div class="tab-close"></div></div> -->
        		</div>
        		<div class="tab-center" tid="AUTH001">
        			<iframe id="iframe_AUTH001" src="${pageContext.request.contextPath}/client/static/gotoJsp?path=/web/home.jsp" frameborder='0' style="width:100%;height:99.6%;"></iframe>
        		</div>
        	</div>
        </div>
        
        <!-- <iframe src="home.html" id="iframe-main" frameborder='0' style="width:100%;"></iframe> -->
    </div>
    <!--end-main-container-part-->

	
	<!-- tab menu -->
	<div id="tab-menu" style="position: absolute; z-index: 9999; top: 771px; left: 954px;" class="">
      <ul class="dropdown-menu" role="menu">
          <li><a tabindex="1">关闭</a></li>
          <li><a tabindex="2">关闭其他</a></li>
          <li><a tabindex="3">关闭所有</a></li>
      </ul>
    </div>

    <script src="${pageContext.request.contextPath}/plugin/jquery/jquery-1.8.2.min.js"></script>
    <script src="${pageContext.request.contextPath}/plugin/bootstrap/bootstrap-2.3.0.min.js"></script>
    <script src="${pageContext.request.contextPath}/plugin/layer/layer.js"></script>
    <script src="${pageContext.request.contextPath}/plugin/avalon/avalon.js"></script>
    <!-- 左侧导航 -->
    <script src="${pageContext.request.contextPath}/web/js/common/index.js"></script> 


    <script type="text/javascript">

    //初始化相关元素高度
    function init(){
        $("body").height($(window).height()-80);
        $("#content-tab").height($(window).height()-71);
        $(".tab-center").height($(window).height()-(71+32));
        //$("#iframe-main").height($(window).height()-51);
        $("#sidebar").height($(window).height()-50);
    }

    $(function(){
        init();
        $(window).resize(function(){
            init();
        });
    });

    // This function is called from the pop-up menus to transfer to
    // a different page. Ignore if the value returned is a null string:
    function goPage (newURL) {
        // if url is empty, skip the menu dividers and reset the menu selection to default
        if (newURL != "") {
            // if url is "-", it is this page -- reset the menu:
            if (newURL == "-" ) {
                resetMenu();            
            } 
            // else, send page to designated URL            
            else {  
                document.location.href = newURL;
            }
        }
    }

    // resets the menu selection upon entry to this page:
    function resetMenu() {
        document.gomenu.selector.selectedIndex = 2;
    }

    // uniform使用示例：
    // $.uniform.update($(this).attr("checked", true));
    </script>
</body>
</html>