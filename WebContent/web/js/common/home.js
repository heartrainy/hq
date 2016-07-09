window.baseUrl = $("#base_url").val();

//基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.getElementById('echarts1'));
var myChart2 = echarts.init(document.getElementById('echarts2'));

// 指定图表的配置项和数据

//订单信息配置(周)
var option1 = {
    title: {
        text: '客户日发单量',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
        	type: 'shadow',
        	lineStyle: {
        		width: 1
        	}
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {},
    xAxis: {
        type: 'category',
        axisLabel:{
        	rotate: 0
        },
        splitLine: {
        	show: false
        },
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {
        	show: true
        }
    },
    series: [
        {
            name:'未关闭整车订单',
            type:'bar',
            stack: "总数",
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'未关闭零担订单',
            type:'bar',
            stack: "总数",
            data:[120, 132, 101, 134, 90, 230, 210]
        }
    ],
    color:['#ed7c30', '#5a9bd5']
};

var base = +new Date(2015, 4, 0);
var oneDay = 24 * 3600 * 1000;
var xdata = [];

var ydata1 = [];
var ydata2 = [];

for (var i = 0; i < 31; i++) {
    var now = new Date(base += oneDay);
    xdata.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'));
    ydata1.push(100 + Math.round((Math.random()) * 200));
    ydata2.push(100 + Math.round((Math.random()) * 200));
}

//订单信息配置(月)
var option1_2 = {
    title: {
        text: '客户日发单量',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
        	type: 'shadow',
        	lineStyle: {
        		width: 1
        	}
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {},
    xAxis: {
        type: 'category',
        axisLabel:{
        	interval: 0,
        	rotate: 45
        },
        splitLine: {
        	show: false
        },
        data: xdata
    },
    yAxis: {
        type: 'value',
        splitLine: {
        	show: true
        }
    },
    series: [
        {
            name:'未关闭整车订单',
            type:'bar',
            stack: "总数",
            data: ydata1
        },
        {
            name:'未关闭零担订单',
            type:'bar',
            stack: "总数",
            data: ydata1
        }
    ],
    color:['#ed7c30', '#5a9bd5']
};

//车辆信息配置(周)
var option2 = {
    title: {
        text: '司机日接单量',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
        	type: 'shadow',
        	lineStyle: {
        		width: 1
        	}
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {},
    xAxis: {
        type: 'category',
        axisLabel:{
        	rotate: 0
        },
        splitLine: {
        	show: false
        },
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {
        	show: true
        }
    },
    series: [
        {
            name:'合同及挂靠车总车辆',
            type:'bar',
            stack: "sum",
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'平台找车',
            type:'bar',
            stack: "sum",
            data:[220, 182, 191, 234, 290, 330, 310]
        }
    ],
    color:['#ed7c30', '#5a9bd5']
};

//车辆信息配置(月)
var option2_2 = {
    title: {
        text: '司机日接单量',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
        	type: 'shadow',
        	lineStyle: {
        		width: 1
        	}
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {},
    xAxis: {
        type: 'category',
        axisLabel:{
        	interval: 0,
        	rotate: 45
        },
        splitLine: {
        	show: false
        },
        data: xdata
    },
    yAxis: {
        type: 'value',
        splitLine: {
        	show: true
        }
    },
    series: [
        {
            name:'合同及挂靠车总车辆',
            type:'bar',
            stack: "总数",
            data: ydata2
        },
        {
            name:'平台找车',
            type:'bar',
            stack: "总数",
            data: ydata2
        }
    ],
    color:['#ed7c30', '#5a9bd5']
};

myChart1.setOption(option1);
myChart2.setOption(option2);

window.onresize = function(){
	myChart1.resize();
	myChart2.resize();
};

avalon.ready(function(){
	var vmhome = avalon.define({
		$id: "content",
		waitapproveCorp: "0",
		waitapproveDriver: "0",
		loading: "0",
		sendding: "0",
		confirming: "0",
		recycling: "0",
		unpaid: "0",
		newCustomer: "0",
		newDriver: "0",
		tayOrder: "0",
		tayWayBill: "0",
		orderBillWeek: function(){
			$(this).parent().find(".native").removeClass("native");
			$(this).addClass("native");
			myChart1.showLoading();
			setTimeout(function(){
				myChart1.hideLoading();
				myChart1.setOption(option1);
			},1000);
		},
		orderBillMonth: function(){
			$(this).parent().find(".native").removeClass("native");
			$(this).addClass("native");
			myChart1.showLoading();
			setTimeout(function(){
				myChart1.hideLoading();
				myChart1.setOption(option1_2);
			},1000);
		},
		wayBillWeek: function(){
			$(this).parent().find(".native").removeClass("native");
			$(this).addClass("native");
			myChart2.showLoading();
			setTimeout(function(){
				myChart2.hideLoading();
				myChart2.setOption(option2);
			},1000);
		},
		wayBillMonth: function(){
			$(this).parent().find(".native").removeClass("native");
			$(this).addClass("native");
			myChart2.showLoading();
			setTimeout(function(){
				myChart2.hideLoading();
				myChart2.setOption(option2_2);
			},1000);
		}
	});
	avalon.scan();
	
	
	$.ajax({
		url: window.baseUrl+"/client/billbiz/getCounts",
		data: {},
		type: "post",
		dataType: "json",
		success: function(res) {
			if(res.isSuccess) {
				var data = res.data;
				vmhome.waitapproveCorp = data.waitapproveCorp;
				vmhome.waitapproveDriver = data.waitapproveDriver;
				vmhome.loading = data.loading;
				vmhome.sendding = data.sendding;
				vmhome.confirming = data.confirming;
				vmhome.recycling = data.recycling;
				vmhome.unpaid = data.unpaid;
				vmhome.newCustomer = data.newCustomer;
				vmhome.newDriver = data.newDriver;
				vmhome.tayOrder = data.tayOrder;
				vmhome.tayWayBill = data.tayWayBill;
			}
		},
		error: function() {
			
		}
	});
	
});