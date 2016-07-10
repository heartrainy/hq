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

<!-- nanoscroller -->
<link rel="stylesheet" href="plugin/nanoscroller/nanoscroller.css"/>
<script type="text/javascript" src="plugin/nanoscroller/jquery.nanoscroller.min.js"></script>

<!-- jqpagination -->
<link rel="stylesheet" href="plugin/jqpagination/jqpagination.css" />
<script src="plugin/jqpagination/jquery.jqpagination.min.js"></script>

<!-- table -->
<link rel="stylesheet" href="plugin/tablesorter/style.css" type="text/css" media="print, projection, screen" />
<script type="text/javascript" src="plugin/tablesorter/jquery.tablesorter.pack.js"></script>

<!-- table cursor -->
<script type="text/javascript" src="plugin/table/table.color.js"></script>
  
  <title>perfor</title>

<script type="text/javascript">
$(function(){
	autoHeight();
	$(window).resize(autoHeight);
	selectPerForByPage(1);
});
function autoHeight() {
	var h = $(window).height();
	var w = $(window).width();
	if (h > 0) {
		$(".left").css('height', h - 52 - 41 - 1+4);
		$(".left").css('width', w-2);
		$("#toolsdiv").css('width', w-6);
		$("#bardiv").css({'width':w-6,'margin-top':h-52-39+27});
		$("#titleTable th").each(function(i){
	    	$("#tbColor td:eq("+i+")").attr("width", $(this).width()+2);
	    });
	} else {
		return false;
	}
}
function selectPerForByPage(page, index) {
	var order = "";
	if (index != undefined) {
		var image = $("#titleTable th:eq("+index+")").css("backgroundImage");
		if (image.indexOf("asc", 0)!=-1) {
			order = "ASC";
		} else if (image.indexOf("desc", 0)!=-1) {
			order = "DESC";
		} else {
			order = "ASC";
		}
	} else {
		index = "";
		if ($("#titleTable").length > 0) {
			$("#titleTable th").each(function(i, n){
				var image = $(n).css("backgroundImage");
				if (image.indexOf("asc", 0)!=-1) {
					order = "DESC";
					index = i;
					return false;
				} else if (image.indexOf("desc", 0)!=-1) {
					order = "ASC";
					index = i;
					return false;
				}
			});
		}
	}
	
	$.post(
		"${pageContext.request.contextPath}/servlet/perfor/selectPerForByPage", 
		{
			page: page,
			url: $("#urlparam").val(),
			orderIndex: index,
			order: order
		},
		function(data){
			var js = eval("(" + data + ")");
			
			$("#titleTable").remove();
			var titleTable = "<table id='titleTable' cellspacing='1' class='tablesorter' style='margin: 0px; float: left;'>";
			titleTable += "<thead>";
			titleTable += "<tr>";
			titleTable += "<th onclick='forOrder(0)'>请求url</th>";
			titleTable += "<th onclick='forOrder(1)' width='75'>请求次数</th>";
			titleTable += "<th onclick='forOrder(2)' width='100'>最小耗时(ms)</th>";
			titleTable += "<th onclick='forOrder(3)' width='100'>最大耗时(ms)</th>";
			titleTable += "<th onclick='forOrder(4)' width='100'>最近耗时(ms)</th>";
			titleTable += "<th onclick='forOrder(5)' width='100'>平均耗时(ms)</th>";
			titleTable += "</tr>";
			titleTable += "</thead>";
			titleTable += "<tbody style='display: none;'>";
			titleTable += "<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
			titleTable += "</tbody>";
			titleTable += "</table>";
			$("#main").before(titleTable);
			addTableListener(document.getElementById("titleTable"),0,0);
			var sl = "";
			if (order == "ASC") {
				sl = [[index,0]];
			} else if (order == "DESC") {
				sl = [[index,1]];
			}
			$("#titleTable").tablesorter({
				sortList: sl
			});
		
			$("#tbColor").remove();
			var tbColor = "<table id='tbColor' cellspacing='1' class='tablesorter' style='float: left; margin: 0px;'>" + "\n";
			tbColor += "<thead style='display: none;'>" + "\n";
			tbColor += "<tr><th></th><th></th><th></th><th></th><th></th><th></th></tr>" + "\n";
			tbColor += "</thead>" + "\n";
			tbColor += "<tbody>" + "\n";
			for (var i = 0; i < js.data.length; i++) {
				var tr = "<tr>";
				tr += "<td>" + js.data[i].c_url + "</td>";
				tr += "<td>" + js.data[i].c_count + "</td>";
				tr += "<td>" + js.data[i].c_minTime + "</td>";
				tr += "<td>" + js.data[i].c_maxTime + "</td>";
				tr += "<td>" + js.data[i].c_nowTime + "</td>";
				tr += "<td>" + parseInt(js.data[i].c_totalTime / js.data[i].c_count) + "</td>";
				tr += "</tr>" + "\n";
				tbColor += tr;
			}
			tbColor += "</tbody>" + "\n";
			tbColor += "</table>" + "\n";
			$("div[class='nano-content']").append(tbColor);
			addTableListener(document.getElementById("tbColor"),0,0);
			if (js.data.length > 0) {
				$("#tbColor").tablesorter();
			}
			
			$("#titleTable th").each(function(i){
		    	$("#tbColor td:eq("+i+")").attr("width", $(this).width()+2);
		    });
			
			$(".nano").nanoScroller();
			$('.pagination').remove();
			var div = "";
			div += "<div class='pagination' style='margin-top: 3px;'>";
			div += "<a href='#' class='first' data-action='first'>&laquo;</a>";
			div += "<a href='#' class='previous' data-action='previous'>&lsaquo;</a>";
			div += "<input type='text' readonly='readonly' data-max-page='1' id='curpage' style='-webkit-appearance: none; border-radius: 0;' />";
			div += "<a href='#' class='next' data-action='next'>&rsaquo;</a>";
			div += "<a href='#' class='last' data-action='last'>&raquo;</a>";
			div += "</div>";
			$("#bardiv").append(div);
			$('.pagination').jqPagination({
				link_string	: 'page={page_number}',
				max_page	: js.dataMaxPage == 0 ? 1 : js.dataMaxPage,
				current_page: page,
				paged		: function(page) {
					selectPerForByPage(page);
				}
			});
		}
	);
}
function selectPerForData(type) {
	if (type == "enter") {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if (e && e.keyCode == 13) {
			selectPerForByPage(1);
		}
	} else if (type == "click") {
		selectPerForByPage(1);
	}
}
function forOrder(index) {
	var curpage = $("#curpage").val().split(" ")[1];
	selectPerForByPage(curpage, index);
}
</script>
</head>
	<body style="margin: 0px; overflow: hidden; border: 1px solid #a9c;">
		<div style="background-color: #BCC3E6; height: 32px; padding-left: 4px; line-height: 32px;" id="toolsdiv">
			<label style="font-weight: bold; font-size: 12px; border: 0px solid red; float: left;">URL查询</label>
			<input id="urlparam" type="text" style="margin-left: 8px; margin-top: 6px; float: left; width: 200px; font-size: 12px; font-family: 宋体; height: 16px;" onkeypress="selectPerForData('enter')">
			<input type="button" value="查询" style="margin-left: 8px; margin-top: 6px; float: left;" onclick="selectPerForData('click')">
		</div>
		
		<table id='titleTable' cellspacing='1' class='tablesorter' style='margin: 0px;float: left;'>
			<thead>
				<tr>
					<th onclick='forOrder(0)'>请求url</th>
					<th onclick='forOrder(1)' width='75'>请求次数</th>
					<th onclick='forOrder(2)' width='100'>最小耗时(ms)</th>
					<th onclick='forOrder(3)' width='100'>最大耗时(ms)</th>
					<th onclick='forOrder(4)' width='100'>最近耗时(ms)</th>
					<th onclick='forOrder(5)' width='100'>平均耗时(ms)</th>
				</tr>
			</thead>
		</table>
			
		<div id='main' class='left' style="float: left;">
			<div class='nano'>
				<div class='nano-content'>
				</div>
			</div>
		</div>
		
		<div style="background-color: #3CC3E6; height: 26px; padding: 2px;" align="right" id="bardiv">
			<div style="vertical-align: middle; margin-left: 5px; float: left; margin-top: 7px; font-size: 12px; font-weight: bold;">
				<label>性能监控模块 V1.0 更新日期 2014-09-30</label>
			</div>
		</div>
	</body>
</html>
