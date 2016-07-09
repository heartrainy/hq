<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<title>首页</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" href="${pageContext.request.contextPath}/plugin/bootstrap/bootstrap-2.3.0.min.css" />
<link rel="stylesheet" href="${pageContext.request.contextPath}/plugin/font-awesome/css/font-awesome.css" />
<link rel="stylesheet" href="${pageContext.request.contextPath}/web/css/matrix-style2.css" />
<link rel="stylesheet" href="${pageContext.request.contextPath}/web/css/matrix-media.css" />
</head>
<body>
<input type="hidden" id="base_url" value="${pageContext.request.contextPath}">
<div id="content" ms-controller="content">
  <div class="container-fluid">
    <div class="row-fluid">
      <!-- 待办事项 -->	
      <div class="span6">
      	<div class="clds-widget-box">
      		<div class="clds-widget-title">
      			<div class="clds-widget-title-text">待办事项</div>
      			<div class="clds-widget-title-refresh"></div>
      		</div>
      		<div class="clds-widget-content" >
      			<ul class="recent-posts" style="display: inline-block; width: 49.5%;">
	              <li>
	                <div class="article-post">
	                	<span class="user-info-img user-info-img-1"></span>
	                	<span class="user-info">
	                		<span class="user-info-left">待审核客户：</span>
	                		<span class="importFont">{{waitapproveCorp}}</span>个
	                	</span>
	                </div>
	              </li>
	              <li>
	                <div class="article-post">
	                	<span class="user-info-img user-info-img-2"></span>
	                	<span class="user-info">
	                		<span class="user-info-left">待审核司机：</span>
	                		<span class="importFont">{{waitapproveDriver}}</span>个
	                	</span>
	                </div>
	              </li>
	              <li>
	                <div class="article-post">
	                	<span class="user-info-img user-info-img-3"></span>
	                	<span class="user-info">
	                		<span class="user-info-left">待配载任务单：</span>
	                		<span class="importFont">{{loading}}</span>笔
	                	</span>
	                </div>
	              </li>  
	              <li>
	                <div class="article-post">
	                	<span class="user-info-img user-info-img-4"></span>
	                	<span class="user-info">
	                		<span class="user-info-left">待派车运单：</span>	
	                		<span class="importFont">{{sendding}}</span>笔
	                	</span>
	                </div>
	              </li>
	            </ul>
	            
	            <ul class="recent-posts recent-posts-sec" style="position: relative; display: inline-block; width: 49.5%;">
	              <li>
	                <div class="article-post">
	                	<span class="user-info-img user-info-img-1"></span>
	                	<span class="user-info">
	                		<span class="user-info-left">待确认回单：</span>
	                		<span class="importFont">{{confirming}}</span>笔
	                	</span>
	                </div>
	              </li>
	              <li>
	                <div class="article-post">
	                	<span class="user-info-img user-info-img-2"></span>
	                	<span class="user-info">
	                		<span class="user-info-left">待回收回单：</span>
	                		<span class="importFont">{{recycling}}</span>笔
	                	</span>
	                </div>
	              </li>
	              <li>
	                <div class="article-post">
	                	<span class="user-info-img user-info-img-3"></span>
	                	<span class="user-info">
	                		<span class="user-info-left">待收货款：</span>
	                		<span class="importFont">{{unpaid}}</span>笔
	                	</span>
	                </div>
	              </li>  
	              <li>
	                <div class="article-post">
	                	<span class=""></span>
	                	<span class="user-info"></span>
	                </div>
	              </li>
	            </ul>
      		</div>
      	</div>
      </div>
      
      <!-- 今日看板 -->
      <div class="span3">
        <div class="clds-widget-box">
      		<div class="clds-widget-title">
      			<div class="clds-widget-title-text">今日看板</div>
      			<div class="clds-widget-title-refresh"></div>
      		</div>
      		<div class="clds-widget-content">
      			<ul class="recent-posts">
	              <li>
	                <div class="article-post">
	                	<span class="user-info-img user-info-img-5"></span>
	                	<span class="user-info">新增客户：<span class="importFont">{{newCustomer}}</span>个</span>
	                </div>
	              </li>
	              <li>
	                <div class="article-post">
	                	<span class="user-info-img user-info-img-5"></span>
	                	<span class="user-info">新增司机：<span class="importFont">{{newDriver}}</span>个</span>
	                </div>
	              </li>
	              <li>
	                <div class="article-post">
	                	<span class="user-info-img user-info-img-2"></span>
	                	<span class="user-info">日订单量：<span class="importFont">{{tayOrder}}</span>笔</span>
	                </div>
	              </li>
	              <li>
	                <div class="article-post">
	                	<span class="user-info-img user-info-img-6"></span>
	                	<span class="user-info">日运单量：<span class="importFont">{{tayWayBill}}</span>笔</span>
	                </div>
	              </li>
	            </ul>
      		</div>
      	</div>
      </div>
      
      <!-- 平台动态 -->
      <div class="span3">
        <div class="clds-widget-box">
      		<div class="clds-widget-title">
      			<div class="clds-widget-title-text">平台动态</div>
      			<div></div>
      		</div>
      		<div class="clds-widget-content">
      			<ul class="recent-posts">
	              <li>
	                <div class="article-post-left">
	                	<span class="user-info-img-pointer user-info-img-pointer-1"></span>
	                	<span class="user-info">平台版本1.02发布,新增功能说明</span>
	                </div>
	              </li>
	              <li>
	                <div class="article-post-left">
	                	<span class="user-info-img-pointer user-info-img-pointer-1"></span>
	                	<span class="user-info">平台版本1.02发布,新增功能说明</span>
	                </div>
	              </li>
	              <li>
	                <div class="article-post-left">
	                	<span class="user-info-img-pointer user-info-img-pointer-2"></span>
	                	<span class="user-info">平台版本1.02发布,新增功能说明</span>
	                </div>
	              </li>  
	              <li>
	                <div class="article-post-left">
	                	<span class="user-info-img-pointer user-info-img-pointer-1"></span>
	                	<span class="user-info">平台版本1.02发布,新增功能说明</span>
	                </div>
	              </li>
	            </ul>
      		</div>
      	</div>
      </div>
      
    </div>
    
    <div class="row-fluid">
    	<div class="span6">
	        <div class="clds-widget-box">
	      		<div class="clds-widget-title">
	      			<div class="clds-widget-title-text clds-widget-title-text-left"></div>
	      			<div class="clds-widget-title-btn">
	      				<div class="native" ms-click="orderBillWeek">周报</div>
	      				<div ms-click="orderBillMonth">月报</div>
	      			</div>
	      		</div>
	      		<div class="clds-widget-content">
	      			<div id="echarts1" style="height:400px;"></div>
	      		</div>
	      	</div>
      	</div>
      	<div class="span6">
	        <div class="clds-widget-box">
	      		<div class="clds-widget-title">
	      			<div class="clds-widget-title-text clds-widget-title-text-left"></div>
	      			<div class="clds-widget-title-btn">
	      				<div class="native" ms-click="wayBillWeek">周报</div>
	      				<div ms-click="wayBillMonth">月报</div>
	      			</div>
	      		</div>
	      		<div class="clds-widget-content">
	      			<div id="echarts2" style="height:400px;"></div>
	      		</div>
	      	</div>
      	</div>
    </div>
    
  </div>
</div>

<script src="${pageContext.request.contextPath}/plugin/jquery/jquery-1.8.2.min.js"></script>
<script src="${pageContext.request.contextPath}/plugin/bootstrap/bootstrap-2.3.0.min.js"></script>
<script src="${pageContext.request.contextPath}/plugin/echarts3/echarts.min.js"></script>
<script src="${pageContext.request.contextPath}/plugin/avalon/avalon.js"></script>
<script src="${pageContext.request.contextPath}/web/js/common/home.js"></script>

</body>
</html>
